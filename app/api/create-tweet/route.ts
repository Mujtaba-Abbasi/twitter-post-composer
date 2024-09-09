import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import {
  ApiResponseError,
  SendTweetV2Params,
  TwitterApi,
} from "twitter-api-v2";
import { getErrorMessage } from "@/app/constants/errors";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const token = await getToken({ req: request });

    const { tweetContent, mediaId } = body as {
      tweetContent: string;
      mediaId: string;
    };

    const accessToken = token?.accessToken as string;
    const accessTokenExpiration = token?.accessTokenExpiration as number;

    if (!accessToken || !tweetContent) {
      return NextResponse.json(
        { error: "Missing accessToken or tweetContent" },
        { status: 400 }
      );
    }

    const currentTime = Date.now();
    if (accessTokenExpiration && currentTime >= accessTokenExpiration) {
      const errorMessage = getErrorMessage(401);

      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }

    const twitterClient = new TwitterApi(accessToken);

    const payload: Partial<SendTweetV2Params> | undefined = mediaId
      ? {
          media: {
            media_ids: [mediaId] as [string],
          },
        }
      : undefined;

    await twitterClient.v2.tweet(tweetContent, payload);

    return NextResponse.json("Tweet has been created successfully", {
      status: 200,
    });
  } catch (error) {
    let errorMessage = null;
    let status = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (error instanceof ApiResponseError) {
      errorMessage = getErrorMessage(error.code) ?? error.data.detail;
      status = error?.code;
    }

    return NextResponse.json(
      { error: errorMessage ?? "Something went wrong creating the tweet" },
      { status }
    );
  }
}
