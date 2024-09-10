import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const PostSchema = z.object({
  title: z.string().max(40, "Title can't exceed 40 characters").optional(),
  content: z
    .string()
    .min(1, "Content must have at least 1 character")
    .max(280, "Content cannot exceed 280 characters"),
  media: z
    .custom<FileList>()
    .optional()
    .refine((files) => {
      const file = (files as unknown as FileList)?.[0];
      if (!file) return true;
      return file instanceof File && file.type.startsWith("image/");
    }, "Media must be an image file"),
  showPreview: z.boolean().optional(),
});

export type PostType = z.infer<typeof PostSchema>;

export const PostResolver = zodResolver(PostSchema);
