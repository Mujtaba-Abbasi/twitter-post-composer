import Image from "next/image";
import { X } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { PostType } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { TweetCard } from "../";

export function ChannelPreview() {
  const { watch, setValue } = useFormContext<PostType>();
  const showPreview = watch("showPreview");
  return (
    <div className="flex flex-col relative justify-center text-center items-center py-10 gap-6 lg:w-[30%] bg-[#3A3A3A]">
      {!showPreview ? (
        <>
          <Image
            src="/svgs/eye-scan.svg"
            alt="eye-scan"
            width={100}
            height={100}
          />
          <h1 className="text-xl">Select a channel to view preview</h1>
          <p>
            The preview will only be available once you selected the channel
          </p>
        </>
      ) : (
        <>
          <TweetCard />
          <Button
            variant="ghost"
            type="button"
            className="absolute top-5 right-5"
            onClick={() => setValue("showPreview", false)}
          >
            <X />
          </Button>
        </>
      )}
    </div>
  );
}
