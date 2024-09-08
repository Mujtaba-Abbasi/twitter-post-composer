// next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiration?: number;
  }

  interface Token {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiration?: number;
  }
}
