import Link from "next/link";
import Image from "next/image";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { NavLinks } from "./components";
import { MenuIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="w-full z-50 fixed top-0 h-[65px] md:h-[60px] lg:h-[80px] items-center bg-secondary flex justify-between gap-20 py-2 px-4 md:px-8 lg:py-0 border border-b-gray-600">
      <Link href={"/"} className="flex gp-2 items-end min-w-36">
        <Image src={"/svgs/logo.svg"} alt="logo" height={45} width={45} />
        <span className="font-bold texr-lg md:text-xl self-bottom">
          Let&apos;s do it
        </span>
      </Link>
      <NavLinks
        styles={"hidden lg:flex flex-1 gap-10"}
        profileStyles="hidden lg:flex"
      />
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="lg:hidden h-8 w-8" />
        </SheetTrigger>
        <SheetContent side="right" className="lg:hidden bg-secondary">
          <NavLinks
            styles={"flex flex-col"}
            profileStyles="flex flex-row-reverse"
          />
        </SheetContent>
      </Sheet>
    </header>
  );
};
