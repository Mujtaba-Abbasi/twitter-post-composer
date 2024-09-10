"use client";
import { useFormContext } from "react-hook-form";
import { Accordion } from "@/components/ui/accordion";
import { PostType } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { AccordionInput, ImageSelect } from "../";

export function AccordionSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PostType>();

  return (
    <Accordion type="multiple" className="w-full px-4 md:px-8 py-4 md:py-8">
      <AccordionInput
        title="Caption"
        description="Type the caption yourself"
        inputElement={
          <div>
            <Textarea
              {...register("content")}
              placeholder="Enter your caption here"
            />
          </div>
        }
        error={errors.content?.message}
      />
      <AccordionInput
        title="Creative"
        description="Upload custom image"
        inputElement={<ImageSelect register={register} />}
        error={errors.media?.message}
      />
    </Accordion>
  );
}
