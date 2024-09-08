"use client";

import { PropsWithChildren } from "react";
import { Navbar } from "@/app/elements";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="flex-grow mt-[65px] md:mt-[60px] lg:mt-[80px] overflow-hidden">
        {children}
      </main>
    </>
  );
};
