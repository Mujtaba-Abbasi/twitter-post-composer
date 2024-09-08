import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ImageSelectProps } from "./props";

export function ImageSelect({ register }: ImageSelectProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
        <div className="relative rounded-full cursor-pointer">
          <Image
            src={"/svgs/gallery.svg"}
            alt="gallery-image"
            width={40}
            height={40}
            className="text-gray-500"
          />
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            {...register("media")}
          />
        </div>
        <h2 className="text-xl font-semibold">Select Image</h2>
        <p className="text-sm text-gray-400 text-center">
          Upload now or choose from previously uploaded images
        </p>
      </CardContent>
    </Card>
  );
}
