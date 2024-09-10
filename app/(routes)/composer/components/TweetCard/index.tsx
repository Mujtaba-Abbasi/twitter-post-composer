import Image from "next/image";
import { Forward, Quote, Repeat } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useData } from "./hooks";

export const TweetCard = () => {
  const { media, content, user, formatText } = useData();

  return (
    <Card className="bg-white text-gray-800 rounded-xl p-4 w-[90%]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user?.image ?? ""} alt="User Avatar" />
              <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="ml-1.5 flex flex-col items-start">
              <CardTitle>
                <p className="tracking-wide text-base font-bold">
                  {user?.name}
                </p>
              </CardTitle>
              <CardDescription className="text-gray-500">
                @username
              </CardDescription>
            </div>
          </div>
          <Image
            src={"/svgs/twitter-white.svg"}
            height={35}
            width={35}
            alt="twitter"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-start text-lg whitespace-pre-wrap">
          {content ? formatText(content) : ""}
        </p>

        {media && media[0] && (
          <Image
            className="mt-2 rounded-2xl border border-gray-100 w-full"
            src={URL.createObjectURL(media[0])}
            alt="Tweet Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        )}

        <p className="text-gray-500 text-base text-start">
          00:00 AM Jan 0, 2000
        </p>

        <div className="h-[1px] bg-gray-200 " />

        <div className="flex gap-2 md:gap-4 justify-between">
          {[
            {
              title: "Retweets",
              value: 20,
              icon: <Repeat />,
            },
            {
              title: "Quote Tweets",
              value: 33,
              icon: <Quote />,
            },
            {
              title: "Likes",
              value: 12445,
              icon: <Forward />,
            },
          ].map(({ title, value, icon }) => (
            <div
              key={title}
              className="flex gap-2 text-bold text-base md:text-lg text-black"
            >
              <span>{value}</span>
              <span className="sm:hidden">{icon}</span>
              <span className="hidden md:block text-gray-600">{title}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
