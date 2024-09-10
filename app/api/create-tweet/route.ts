import { NextRequest, NextResponse } from "next/server";
import { SendTweetV2Params, TwitterApi } from "twitter-api-v2";
import { handleError, authenticateRequest } from "../utils";

export async function POST(request: NextRequest) {
  try {
    const { tweetContent, mediaId } = await request.json();

    if (!tweetContent) {
      throw new Error("Missing tweetContent");
    }

    const accessToken = await authenticateRequest(request);
    const twitterClient = new TwitterApi(accessToken);

    const payload: Partial<SendTweetV2Params> | undefined = mediaId
      ? { media: { media_ids: [mediaId] } }
      : undefined;

    await twitterClient.v2.tweet(tweetContent, payload);

    return NextResponse.json("Tweet has been created successfully", {
      status: 200,
    });
  } catch (error) {
    return handleError(error);
  }
}
