import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { CheckIcon, Edit2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostType } from "@/lib/validations";
import { ConfirmationAlert } from "@/app/elements";
import { InfoCardProps } from "./props";

export function InfoCard({ resetForm, isDisabled }: InfoCardProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<PostType>();

  const title = watch("title");
  const showPreview = watch("showPreview");
  const [isEditing, setIsEditing] = useState(false);

  const iconStyles = "h-4 md:h-6 w-4 md:w-6 text-gray-400";

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChannelSelect = () => {
    if (!isDisabled) {
      setValue("showPreview", true);
    }
  };

  return (
    <div className="flex flex-col pt-12 relative gap-2 md:gap-4 px-4 md:px-8 py-4 bg-[#0F0F0F99] border border-y-gray-600">
      <ConfirmationAlert
        trigger={
          <Button
            size="icon"
            className="h-10 w-10 absolute right-6 top-2 bg-secondary rounded-full self-end"
            type="button"
            disabled={isDisabled}
          >
            <Trash className="text-gray-300 h-6 w-6" />
          </Button>
        }
        description="Are you sure you want to clear out the form?"
        onConfirm={resetForm}
      />

      <div className="flex flex-col">
        <p className="text-sm md:text-lg text-gray-300">IDEA</p>
        <div className="flex items-center">
          <input
            type="text"
            className={`bg-transparent p-2 rounded-xl max-w-[300px] ${
              isEditing ? "border-2" : "border-none"
            }`}
            value={title}
            placeholder="Untitled"
            {...register("title")}
            disabled={!isEditing}
          />
          <Button
            size="icon"
            className="h-14 w-14"
            variant="ghost"
            type="button"
            onClick={handleEditClick}
          >
            {isEditing ? (
              <CheckIcon className={iconStyles} />
            ) : (
              <Edit2 className={iconStyles} />
            )}
          </Button>
        </div>
        {errors?.title?.message && (
          <p className="text-sm mt-2 text-red-600">{errors?.title?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-sm md:text-lg text-gray-300">CHANNEL</p>
        <Button
          size="icon"
          variant={showPreview ? "outline" : "ghost"}
          type="button"
          className="flex items-center gap-4 w-fit h-fit rounded-full"
          onClick={handleChannelSelect}
        >
          <Image
            src={"/svgs/twitter.svg"}
            alt={"twitter"}
            height={50}
            width={50}
          />
        </Button>
      </div>
    </div>
  );
}
