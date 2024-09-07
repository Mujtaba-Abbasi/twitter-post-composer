"use client";

import { PropsWithChildren } from "react";
import { Navbar } from "@/app/elements";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
