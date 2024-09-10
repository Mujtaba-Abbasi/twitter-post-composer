"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/app/constants";
import { ConfirmationAlert } from "@/app/elements/ConformationAlert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const NavLinks = ({
  styles,
  profileStyles,
}: {
  styles: string;
  profileStyles: string;
}) => {
  const pathname = usePathname();
  const { status, data } = useSession();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const isAuthenticated = status === "authenticated";
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const onLogout = async () => {
    await signOut();
  };

  return (
    <nav className="flex flex-col-reverse lg:flex-row justify-between w-full items-center">
      <div className={`${styles}`}>
        {ROUTES.slice(0, isAuthenticated ? 2 : 1).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.title} className="relative py-6">
              <p
                className={`text-xl transition-all duration-100 ease-in ${
                  isActive
                    ? "font-bold text-highlight"
                    : "font-medium text-gray-500"
                }`}
              >
                {item.title}
              </p>
              <span
                className={`absolute bottom-0 left-0 right-0 bg-gradient rounded-2xl transition-all ease-in duration-200 ${
                  isActive ? "h-[4px]" : "h-0"
                }`}
              />
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-2 blur-2xl bg-white opacity-80 rounded-t-3xl" />
              )}
            </Link>
          );
        })}
      </div>
      {isAuthenticated && (
        <div>
          <div
            className={`${profileStyles} ${
              isExpanded ? "w-56" : "w-20"
            } bg-faded p-1 px-4 rounded-xl md:flex-row gap-4 items-center justify-between transition-all duration-300 ease-in-out`}
          >
            <div
              className={`flex flex-row-reverse flex-1 gap-4 md:flex-row justify-end items-center overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "block" : "hidden"
              }`}
            >
              <ConfirmationAlert
                trigger={
                  <Button
                    size="icon"
                    variant="ghost"
                    className="transition-all duration-300 ease-in-out"
                  >
                    <ExitIcon className="h-6 w-6" />
                  </Button>
                }
                onConfirm={onLogout}
                description="Are you sure you want to logout?"
              />
              <p className="text-lg font-bold whitespace-nowrap overflow-hidden">
                {data?.user?.name?.split(" ")?.[0]}
              </p>
            </div>

            <Button
              onClick={toggleExpand}
              variant="ghost"
              className="h-12 w-fit transition-transform duration-300 ease-in-out"
              size="icon"
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={data?.user?.image ?? ""} alt="User Avatar" />
                <AvatarFallback>{data?.user?.name?.slice(0, 1)}</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
