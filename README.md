# Supabase + Next.js CRUD App with Authentication

A simple Next.js project demonstrating Supabase integration for:

- User authentication (login/register)
- Create, read, update, delete (CRUD) operations
- Secure Supabase access from a Next.js app

## Features

- Email/password login and registration
- Authenticated user sessions
- Supabase database CRUD operations
- Next.js App Router setup

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase project with API keys and database set up
- `npm`, `yarn`, or `pnpm`

### Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/supabase-nextjs.git
cd supabase-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the project root and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_SUPABASE_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
```

> Replace the example values with your Supabase project URL and keys.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `app/page.tsx` - Main application page
- `app/layout.tsx` - Global layout
- `app/globals.css` - Global styles
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript config

## Usage

- Register a new user or log in with an existing account
- Create new items in the Supabase database
- View, edit, and delete records

## Notes

- Make sure your Supabase table schema matches the frontend data model.
- Use secure environment variables and do not commit keys to source control.

## Deploy

Deploy this app to Vercel or any compatible Next.js hosting provider.

For Vercel:

```bash
vercel deploy
```

Then configure your environment variables in the deployment settings.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
