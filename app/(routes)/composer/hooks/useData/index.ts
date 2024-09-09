import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { PostResolver, PostType } from "@/lib/validations";
import { useToast } from "@/hooks/use-toast";

export const useData = () => {
  const session = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const methods = useForm<PostType>({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: PostResolver,
    mode: "onChange",
  });

  const onSubmit = async (data: PostType) => {
    setIsLoading(true);
    const { content } = data;
    // const { media, content } = data;
    // const file = media?.[0];

    const mediaId = null;
    // let mediaId = null;

    // * The oauth 2 doesn't support media uploads, v1 API doesn't allow to upload images on behalf of another user
    // if (file) {
    //   try {
    //     const fileBuffer = await file.arrayBuffer();

    //     const mediaRes = await fetch("/api/upload-media", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         fileBuffer: Buffer.from(fileBuffer).toString("base64"),
    //         accessToken: session.data?.accessToken,
    // fileType: file?.type
    //       }),
    //     });

    //     const mediaData = await mediaRes.json();

    //     if (mediaRes.ok) {
    //       mediaId = mediaData.mediaId;
    //     } else {
    //       console.error("Failed to upload media:", mediaData.error);
    //       return;
    //     }
    //   } catch (error) {
    //     console.error("Error uploading media:", error);
    //     return;
    //   }
    // }

    try {
      const tweetRes = await fetch("/api/create-tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: session.data?.accessToken,
          tweetContent: content,
          mediaId: mediaId,
        }),
      });

      const tweetData = await tweetRes.json();

      if (tweetRes.ok) {
        console.log("Tweet created successfully:", tweetData);
      } else {
        console.error("Failed to create tweet:", tweetData.error);
      }
    } catch (error) {
      console.error("Error creating tweet:", error);
    }
    methods.reset({
      title: "",
      content: "",
    });
    toast({
      title: "Tweet Created",
      description: "Tweet created successfully",
    });
    setIsLoading(false);
  };

  return { isLoading, methods, onSubmit };
};
