import { ApiResponseError, TwitterApi } from "twitter-api-v2";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { getErrorMessage } from "@/app/constants/errors";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fileBuffer, fileType } = body as {
      fileBuffer: string;
      fileType: string;
    };

    if (!fileBuffer) {
      return NextResponse.json({ message: "No file buffer provided" });
    }

    const token = await getToken({ req: request });

    const accessToken = token?.accessToken as string;
    const accessTokenExpiration = token?.accessTokenExpiration as number;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Missing AccessToken" },
        { status: 400 }
      );
    }

    const currentTime = Date.now();
    if (accessTokenExpiration && currentTime >= accessTokenExpiration) {
      const errorMessage = getErrorMessage(401);

      return NextResponse.json({ error: errorMessage }, { status: 401 });
    }

    const buffer = Buffer.from(fileBuffer, "base64");

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

    const mediaId = await twitterClient.v1.uploadMedia(buffer, {
      mimeType: fileType ?? "image/png",
    });

    return NextResponse.json({ mediaId });
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
