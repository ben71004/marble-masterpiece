# Marble Masterpiece

A luxury marble business website built with React, TypeScript, and Supabase — featuring secure authentication and role-based admin access.

## Tech Stack

- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **UI:** [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend:** [Supabase](https://supabase.com/) (email/password authentication, admin roles)
- **Testing:** [Vitest](https://vitest.dev/) (unit) + [Playwright](https://playwright.dev/) (end-to-end)
- **Package manager:** [Bun](https://bun.sh/) (npm also supported)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js with npm
- A [Supabase](https://supabase.com/) project (for auth and data)

### Installation

```bash
# Clone the repository
git clone https://github.com/ben71004/marble-masterpiece.git
cd marble-masterpiece

# Install dependencies
bun install
# or: npm install
```

### Environment Variables

Create a `.env` file in the project root with your Supabase project credentials:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Development

```bash
bun dev
# or: npm run dev
```

The site will be available at `http://localhost:5173` by default.

### Build

```bash
bun run build
# or: npm run build
```

### Testing

```bash
# Unit tests
bun run test
# or: npm run test

# End-to-end tests
bun run test:e2e
# or: npm run test:e2e
```

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── assets/               # Images and other static assets
│   ├── components/           # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── integrations/supabase/ # Supabase client and auth integration
│   ├── lib/                    # Utility functions and shared logic
│   ├── pages/                 # Page-level components/routes
│   ├── test/                   # Test utilities and setup
│   ├── App.tsx
│   └── main.tsx
├── supabase/                 # Supabase configuration and schema
├── tailwind.config.ts
└── vite.config.ts
```

## Features

- Responsive, styled front-end for a marble/natural stone business
- Email/password authentication via Supabase
- Role-based access control (admin roles)
- Component library built on shadcn/ui and Tailwind CSS

## License

This project does not currently specify a license.
