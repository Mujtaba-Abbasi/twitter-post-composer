## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/): Node installation also includes the _npm_ package manager. Or if want to manage multiple Node versions on system, use [NVM](https://github.com/coreybutler/nvm-windows/releases) and install specific Node version using nvm commands.
- Package installer of your choice.
  - Bun
  - Yarn
  - Pnpm
  - Npm

Npm is installed with node.js, you can install the any of the other package managers using npm.

e.g.

You can install bun using

```bash
    npm run install -g bun
```

## Cloning The Repository

Clone repository (first time) with

```bash
git clone https://github.com/Mujtaba-Abbasi/twitter-post-composer.git
```

or pull updates from the repository (subsequent times) with `git pull`.

## Installing The Dependencies

First, install the dependencies:

```bash
npm run install
# or
yarn
# or
pnpm install
# or
bun install
```

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
TWITTER_CLIENT_ID=*******
TWITTER_CLIENT_SECRET=******
TWITTER_API_KEY=******
TWITTER_API_SECRET=******
TWITTER_ACCESS_TOKEN=******
TWITTER_ACCESS_SECRET=******

NEXTAUTH_URL=******
NEXTAUTH_SECRET=******
```

## Twitter Developer Account Setup

You can setup your developer account by visiting the [Dashboard.](https://developer.x.com/en/portal/dashboard) <br/>
Create the Project enable read and write access and copy the information required for setting the envrionment as mentioned above.
<br/>
You might have to connect a VPN in order to access [X](https://twitter.com) from Pakistan.

## Getting Started

Run any of the following commands to start development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Due to Twitter ban in Pakistan, the Auth Flow and API calls doesn't work without a VPN.
Connect a VPN and run the app.

## About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Remove this variable from vercel envrionment because Vercel automatically takes cares of this with the deployment domain.

```
NEXTAUTH_URL=******
```
