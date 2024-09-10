import { TwitterApi } from "twitter-api-v2";
import { NextRequest, NextResponse } from "next/server";
import { handleError, authenticateRequest } from "../utils";

export async function POST(request: NextRequest) {
  try {
    const { fileBuffer, fileType } = await request.json();

    if (!fileBuffer) {
      return NextResponse.json({ message: "No file buffer provided" });
    }

    const accessToken = await authenticateRequest(request);

    /*
      This twitterClient with 0auth 2 access token doesn't create the media with v1 API
    */
    const twitterClient = new TwitterApi(accessToken);

    /*
        This configuration creates the media on behalf of the developer's account
         and doesn't allow to create tweet using this media with other user's 0auth 2.0 access token
  
          const twitterClient = new TwitterApi({
          appKey: process.env.TWITTER_API_KEY as string,
          appSecret: process.env.TWITTER_API_SECRET as string,
          accessToken: process.env.TWITTER_ACCESS_TOKEN,
          accessSecret: process.env.TWITTER_ACCESS_SECRET,
      });
      */

    const buffer = Buffer.from(fileBuffer, "base64");
    const mediaId = await twitterClient.v1.uploadMedia(buffer, {
      mimeType: fileType ?? "image/png",
    });

    return NextResponse.json({ mediaId });
  } catch (error) {
    return handleError(error);
  }
}
