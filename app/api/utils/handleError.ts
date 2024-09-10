import { getErrorMessage } from "@/app/constants/errors";
import { NextResponse } from "next/server";
import { ApiResponseError } from "twitter-api-v2";

export const handleError = (error: unknown) => {
  let errorMessage = "Something went wrong";
  let status = 500;

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  if (error instanceof ApiResponseError) {
    errorMessage = getErrorMessage(error.code) ?? error.data.detail;
    status = error?.code;
  }

  return NextResponse.json({ error: errorMessage }, { status });
};
