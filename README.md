# #JUMCA — Department Portal

> **amra kara?** huhh hahh, huhh hahh.

The official web portal for the JU MCA, Department of Computer Science & Engineering - your notes, placements, and journey, all in one place.

---

## Monorepo structure

```
jumca-portal/
├── apps/
│   ├── client/          # React 19 + TypeScript + Tailwind v4 (Vite)
│   └── server/          # Node.js + Express 5 + TypeScript + Prisma
├── packages/
│   └── shared/          # Shared types, validators, constants (@jumca/shared)
├── docs/
│   ├── database.dbml    # DB schema diagram source
│   ├── endpoints.md     # API endpoint documentation (add to this as you build)
│   └── pages.md         # Frontend page documentation (add to this as you build)
├── tsconfig.base.json   # Shared TS config extended by each workspace
└── package.json         # Root workspace: npm workspaces
```

## Path aliases

| Alias       | Resolves to             |
| ----------- | ----------------------- |
| `@shared/*` | `packages/shared/src/*` |
| `@client/*` | `apps/client/src/*`     |
| `@server/*` | `apps/server/src/*`     |

## Quick start

```bash
# 1. Install all dependencies (run from repo root)
npm install

# 2. Copy env templates and fill in values
cp apps/server/.env.example apps/server/.env
cp apps/client/.env.example apps/client/.env.local

# 3. Generate Prisma client and run migrations
cd apps/server
npm run db:generate
npm run db:migrate    # creates tables
npm run db:seed       # seeds admin user

# 4. Start both dev servers from repo root
cd ../..
npm run dev           # client → :5173  |  server → :5000

# Or start individually:
npm run client        # frontend only
npm run server        # backend only
```

## Database commands (run from apps/server)

```bash
npm run db:generate   # regenerate Prisma client after schema changes
npm run db:migrate    # create and apply a new migration
npm run db:seed       # seed initial data (admin user)
npm run db:studio     # open Prisma Studio in browser
```

## Default admin credentials (seeded)

| Field        | Value                              |
| ------------ | ---------------------------------- |
| Email / Roll | `admin@jumca.com` / `002510503000` |
| Password     | `admin123`                         |

> Change the password immediately after first login in production.

## Contributing

See the Developer Guide (in your project docs) for:

- Commit conventions
- Branch strategy
- Adding new API endpoints
- Adding new frontend pages

---
