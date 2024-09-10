import { getErrorMessage } from "@/app/constants/errors";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export const authenticateRequest = async (request: NextRequest) => {
  const token = await getToken({ req: request });
  const accessToken = token?.accessToken as string;
  const accessTokenExpiration = token?.accessTokenExpiration as number;

  if (!accessToken) {
    throw new Error("Missing AccessToken");
  }

  const currentTime = Date.now();
  if (accessTokenExpiration && currentTime >= accessTokenExpiration) {
    throw new Error(getErrorMessage(401));
  }

  return accessToken;
};
