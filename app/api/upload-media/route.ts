import { TwitterApi } from "twitter-api-v2";
import { fileTypeFromBuffer } from "file-type";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fileBuffer, accessToken } = body as {
      fileBuffer: string;
      accessToken: string;
    };

    if (!fileBuffer) {
      return NextResponse.json({ message: "No file buffer provided" });
    }

    const buffer = Buffer.from(fileBuffer, "base64");

    const fileTypeResult = await fileTypeFromBuffer(buffer);

    if (!fileTypeResult) {
      return NextResponse.json({
        message: "Unable to determine file type",
      });
    }

    const mimeType = fileTypeResult.mime;

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
      mimeType: mimeType,
    });

    return NextResponse.json({ mediaId });
  } catch (error) {
    console.error("Error uploading media to Twitter:", error);
    return NextResponse.json({ error: "Error uploading media" });
  }
}
