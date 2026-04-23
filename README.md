# NurtureMinds Hub

A modern, conversion-focused edtech website built with Next.js App Router for parents to book free trial classes for kids.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn-style reusable UI components
- Framer Motion animations

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
- Booking, teacher onboarding, contact, signup, and login forms with frontend validation
- Parent dashboard preview for bookings, progress, worksheets, recordings
- Admin panel preview with users, courses, and bookings overview

## Setup

1. Install dependencies
```bash
npm install
```

2. Configure env
```bash
cp .env.example .env
```
3. Run app
```bash
npm run dev
```

Open `http://localhost:3000`.

## Demo Auth Notes

Auth is frontend-only in demo mode. Login/signup flows are UI simulations with no backend persistence.

## Build Status

Production build passes:
```bash
npm run build
```
