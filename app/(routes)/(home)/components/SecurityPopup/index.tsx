"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const SecurityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedVisibility = sessionStorage.getItem(
      "securityNotificationVisible"
    );
    setIsVisible(!Boolean(storedVisibility));
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("securityNotificationVisible", "false");
  };

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-0 z-50 md:right-5 bg-teal-950 lg:bg-transparent rounded-xl">
      <Alert className="w-full md:w-[500px] radial-gradient-green border-green-950 border-2 py-2 md:py-6 px-2 md:px-8 text-white rounded-xl">
        <div className="flex items-center gap-6">
          <Image src="/svgs/shield.svg" alt="shield" height={45} width={45} />
          <AlertTitle className="text-white text-lg md:text-2xl">
            Still worried!
          </AlertTitle>
        </div>
        <AlertDescription className="mt-4">
          <ul className="list-disc pl-6 text-md md:text-lg text-green-500">
            {[
              "Disconnect social media anytime you want",
              "100% secure and not take any action without your permission",
            ].map((item) => (
              <li key={item} className="mb-3">
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </AlertDescription>
        <Button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-green-700"
          size="icon"
          variant="ghost"
        >
          <X className="h-6 w-6" />
        </Button>
      </Alert>
    </div>
  );
};
