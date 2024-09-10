import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { PostResolver, PostType } from "@/lib/validations";
import { useToast } from "@/hooks/use-toast";
import { signOut } from "next-auth/react";

export const useData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const defaultValues = {
    title: "",
    content: "",
    showPreview: false,
  };

  const methods = useForm<PostType>({
    defaultValues,
    resolver: PostResolver,
    mode: "onChange",
  });

  const isFormDisabled = !Object.keys(methods.formState.dirtyFields)?.length;

  const resetForm = useCallback(() => {
    methods.reset(defaultValues);
  }, []);

  const onSubmit = async (data: PostType) => {
    setIsLoading(true);
    const { content } = data;

    // const { media, content } = data;
    // const file = media?.[0];

    const mediaId = null;
    // let mediaId = null;

    // * The oauth 2 doesn't support media uploads, v1 API doesn't allow to upload images on behalf of another user
    /*
    if (file) {
      try {
        const fileBuffer = await file.arrayBuffer();

        const mediaRes = await fetch("/api/upload-media", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fileBuffer: Buffer.from(fileBuffer).toString("base64"),
            fileType: file?.type,
          }),
        });

        const mediaData = await mediaRes.json();

        if (mediaRes.ok) {
          mediaId = mediaData.mediaId;
        } else {
          console.error("Failed to upload media:", mediaData.error);
          return;
        }
      } catch (error) {
        console.error("Error uploading media:", error);
        return;
      }
    }
  */

    try {
      const tweetRes = await fetch("/api/create-tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetContent: content,
          mediaId: mediaId,
        }),
      });

      const tweetData = await tweetRes.json();

      if (tweetRes.ok) {
        resetForm();
        toast({
          title: "Tweet Created",
          description: "Tweet created successfully",
        });
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: tweetData.error ?? "Error creating the tweet",
        });

        if (tweetRes?.status === 401) {
          setTimeout(async () => {
            await signOut();
          }, 1000);
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "An unexpected error occurred while creating the tweet",
      });
      console.log("Error creating tweet =>", error);
    }

    setIsLoading(false);
  };

  return { isLoading, isFormDisabled, methods, onSubmit, resetForm };
};
