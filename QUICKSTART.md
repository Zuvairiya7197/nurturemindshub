# Quickstart

## 1) Configure environment

```bash
cp .env.example .env
```

Set `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET` in `.env`.

## 2) Prepare database

```bash
npx prisma generate
npx prisma db push
npm run prisma:seed
```

## 3) Start development

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 4) Verify production build

```bash
npm run build
```

## Demo Emails

- `parent@example.com`
- `admin@nurtureminds.com`

For local demo mode, login works with any password for existing accounts.
