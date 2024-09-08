import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { ImageIcon } from "lucide-react";
import { PostType } from "@/lib/validations";
import { getMonthAndYear, getWeekDay } from "@/lib/utils";
import { ComposeButton } from "../";

export function Header() {
  const { watch } = useFormContext<PostType>();
  const title = watch("title");

  const day = useMemo(() => getWeekDay(new Date()), []);
  const monthAndYear = useMemo(() => getMonthAndYear(new Date()), []);

  return (
    <div className="flex flex-col md:flex-row w-full justify-start">
      <div className="hidden md:flex flex-col gap-4 items-center min-w-[200px] py-8 bg-secondary border border-y-0 border-gray-600">
        <ComposeButton className="h-16 w-16" />
        <p>Compose Post</p>
      </div>
      <div className="flex flex-1 relative py-8 px-2 md:px-8 lg:py-0 bg-faded">
        <div className="flex flex-col gap-4 self-center w-full">
          <p className="text-xl uppercase">
            <span className="text-gray-400">{day}, </span>
            <span className="font-bold">{monthAndYear}</span>
          </p>{" "}
          <div className="flex px-4 items-center gap-6 h-20 w-full md:w-[320px] bg-[#484848] rounded-xl border border-[#ACACAC]">
            <ImageIcon />
            <div className="flex flex-col">
              <p className="text-lg">{title?.length ? title : "Untitled"}</p>
            </div>
          </div>
        </div>
        <ComposeButton className="absolute md:hidden right-2 top-4 h-8 w-8" />
      </div>
    </div>
  );
}
