# Copilot Instructions for nextjs-dashboard

## Architecture & Structure
- Uses Next.js App Router (`/app` directory) with server and client components.
- UI is modularized under `/app/ui/` (e.g., `/app/ui/invoices/` for invoice-related forms and tables).
- Data fetching and business logic are in `/app/lib/` (e.g., `data.ts`, `actions.ts`).
- Routing is file-based; nested routes and layouts are used for dashboard sections.
- PostgreSQL is the primary database (see `.env` and `/db` if present).

## Developer Workflows
- **Development:** `pnpm dev` (or `npm run dev`, `yarn dev`)
- **Build:** `pnpm build` (or `npm run build`)
- **Lint:** `pnpm lint`
- **Start (prod):** `pnpm start`
- **Environment:** Configure `.env.local` for secrets and DB URLs.

## Patterns & Conventions
- **TypeScript everywhere**; types are defined in `/app/lib/definitions.ts` and used across UI and data layers.
- **React 19+ features**: Hooks like `useActionState` are used in client components.
- **Form handling:** Forms use server actions and optimistic UI patterns; see `/app/ui/invoices/create-form.tsx`.
- **Breadcrumbs and navigation**: Use the `Breadcrumbs` component for consistent navigation UX.
- **Error handling:** Use `error.tsx` in route folders for error boundaries.
- **Loading states:** Use `loading.tsx` for skeletons/spinners in route folders.

## Integration Points
- **Database:** PostgreSQL, connection details in `.env.local`.
- **Authentication:** NextAuth.js (if present, see `/middleware.ts` and `/app/api/auth/`).
- **API routes:** Use `/app/api/` for backend logic.
- **Styling:** Tailwind CSS, configured in `tailwind.config.ts` and `postcss.config.js`.
- **Icons:** Use Heroicons (e.g., `UserCircleIcon`, `CurrencyDollarIcon`).

## Examples
- To add a new dashboard section, create a folder in `/app/dashboard/` and corresponding UI in `/app/ui/`.
- To add a new form, follow the pattern in `/app/ui/invoices/create-form.tsx` (server action, optimistic state, error display).
- For data fetching, use functions from `/app/lib/data.ts`.

## Key Files
- `/app/layout.tsx`, `/app/dashboard/layout.tsx`: Layout and navigation structure.
- `/app/ui/invoices/`: Invoice UI components and forms.
- `/app/lib/`: Data access and business logic.
- `/tailwind.config.ts`: Tailwind CSS setup.
- `/README.md`: High-level project overview and scripts.

---
For any unclear conventions or missing documentation, check `/README.md` or ask for clarification.
