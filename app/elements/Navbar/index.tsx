import Link from "next/link";
import Image from "next/image";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { NavLinks } from "./components";

export const Navbar = () => {
  return (
    <div className="w-full items-center bg-secondary flex justify-between gap-20 py-2 px-4 md:px-20 md:py-0 border border-b-gray-600">
      <Link href={"/"} className="flex gp-2 items-end">
        <Image src={"/svgs/logo.svg"} alt="logo" height={45} width={45} />
        <span className="font-bold texr-lg md:text-xl self-bottom">
          Let's do it
        </span>
      </Link>
      <NavLinks styles={"hidden md:flex flex-1 gap-10"} />
      <Sheet>
        <SheetTrigger>
          <p className="sm:hidden">Open</p>
        </SheetTrigger>
        <SheetContent side="left" className="sm:hidden bg-secondary">
          <NavLinks styles={"flex flex-col"} />
        </SheetContent>
      </Sheet>
    </div>
  );
};
