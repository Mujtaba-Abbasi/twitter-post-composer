import { UseFormRegister } from "react-hook-form";
import { PostType } from "@/lib/validations";

export type ImageSelectProps = {
  register: UseFormRegister<PostType>;
};
