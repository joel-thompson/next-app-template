# My Next.js App Template

This is a template for quickly starting a new next.js app. You can create an app with this template like so:

```bash
npx create-next-app@latest --example "https://github.com/joel-thompson/next-app-template" --use-pnpm [your-app-name]
```

## Features

- Tailwind CSS
- Shadcn UI
- Clerk authentication
- ESLint
- React 19
- Next.js 15

## Getting Started

This project uses Clerk for authentication. You can sign up for a free account at [Clerk](https://clerk.com/).

Once you have an account, you can add your Clerk keys to the `.env` file. You can copy the .env.example file and rename it to .env.

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```



Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
