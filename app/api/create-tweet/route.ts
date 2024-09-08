import { NextRequest, NextResponse } from "next/server";
import { SendTweetV2Params, TwitterApi } from "twitter-api-v2";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { accessToken, tweetContent, mediaId } = body as {
    accessToken: string;
    tweetContent: string;
    mediaId: string;
  };

  if (!accessToken || !tweetContent) {
    return NextResponse.json(
      { error: "Missing accessToken or tweetContent" },
      { status: 400 }
    );
  }

  try {
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
    console.error("Error creating tweet => ", error);
    let errorMessage = null;

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { error: errorMessage ?? "Something went wrong creating the tweet" },
      { status: 500 }
    );
  }
}
