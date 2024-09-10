import { useFormContext } from "react-hook-form";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { PostType } from "@/lib/validations";

export const useData = () => {
  const { watch } = useFormContext<PostType>();
  const { media, content } = watch();
  const { data } = useSession();
  const user = data?.user;

  const formatText = (text: string) => {
    const regex = /(https?:\/\/[^\s]+|www\.[^\s]+|#[\w]+)/g;

    return text.split(regex).map((part, index) => {
      if (part.match(regex)) {
        if (part.startsWith("#")) {
          return (
            <span key={index} className="text-blue-500">
              {part}
            </span>
          );
        } else {
          const formattedUrl = part.startsWith("http")
            ? part
            : `http://${part}`;
          return (
            <Link
              key={index}
              href={formattedUrl}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {part}
            </Link>
          );
        }
      } else {
        return part;
      }
    });
  };

  return { media, content, user, formatText };
};
