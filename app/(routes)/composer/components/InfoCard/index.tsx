import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import { CheckIcon, Edit2, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostType } from "@/lib/validations";

export function InfoCard() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PostType>();

  const title = watch("title");
  const [isEditing, setIsEditing] = useState(false);

  const iconStyles = "h-4 md:h-6 w-4 md:w-6 text-gray-400";

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col pt-12 relative gap-2 md:gap-4 px-2 md:px-8 py-4 bg-[#0F0F0F99] border border-y-gray-600">
      <Button
        size="icon"
        className="h-14 w-14 absolute right-6 top-2 bg-secondary rounded-full self-end"
        type="button"
      >
        <Trash className="text-gray-300 h-8 w-8" />
      </Button>
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
          variant="ghost"
          className="flex items-center gap-4 h-16 w-16"
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
