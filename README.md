# NurtureMinds Hub

A modern, conversion-focused edtech website built with Next.js App Router for parents to book free trial classes for kids.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn-style reusable UI components
- Framer Motion animations
- Prisma + PostgreSQL
- NextAuth (Credentials)

## Implemented Pages

- `/` Home
- `/courses` Courses list
- `/courses/[slug]` Course detail
- `/book` Book free trial
- `/about` About
- `/contact` Contact
- `/teacher-onboarding` Teacher onboarding
- `/auth` Login / Signup
- `/dashboard` Parent dashboard
- `/admin` Admin panel

## Conversion Features

- Sticky navigation with persistent `Book Free Class` CTA
- Floating WhatsApp button
- Floating `Book Now` button
- Repeated high-intent CTAs across all key sections
- Hero + final CTA booking funnels

## Core Functional Features

- Course listing + dynamic course detail pages
- Booking form with server action validation and persistence
- Parent account signup (demo mode) + login
- Role-based session handling (`ADMIN`, `PARENT`, `TEACHER`)
- Parent dashboard for bookings, progress, worksheets, recordings
- Admin panel with users, courses, and bookings overview
- Teacher onboarding and contact forms with server-action feedback

## Setup

1. Install dependencies
```bash
npm install
```

2. Configure env
```bash
cp .env.example .env
```

3. Generate Prisma client and push schema
```bash
npx prisma generate
npx prisma db push
```

4. Seed demo data
```bash
npm run prisma:seed
```

5. Run app
```bash
npm run dev
```

Open `http://localhost:3000`.

## Demo Auth Notes

After seeding, use:
- `parent@example.com`
- `admin@nurtureminds.com`

In this local demo setup, credentials login accepts any password for existing seeded emails.

## Build Status

Production build passes:
```bash
npm run build
```
