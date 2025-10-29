# Agent Guidelines for Dubstack

## Build/Test/Lint
- **Run checks**: `pnpm checks` (runs biome check + tsc typecheck)
- **Test**: `pnpm test` (watch mode) or `pnpm test:run` (single run)
- **Single test**: `pnpm test src/lib/utils.test.ts`
- **Dev**: `pnpm dev` (Next.js with turbopack)
- **Build**: `pnpm build`
- **DB commands**: `pnpm db:push`, `pnpm db:generate`, `pnpm db:studio`

## Code Style
- **Formatter**: Biome (2 spaces, 80 char line width, single quotes for JS/JSX)
- **Imports**: Auto-organized via Biome, use `@/` alias for src imports
- **Types**: TypeScript strict mode enabled, use `type` for object types, infer Drizzle types with `$inferSelect`/`$inferInsert`
- **Naming**: camelCase for vars/functions, PascalCase for components/types, kebab-case for files
- **Components**: Export named components, use `type` for props, JSX with single quotes
- **Error handling**: N/A - no established pattern
- **Testing**: Vitest with jsdom, descriptive test names, group with `describe`

## Stack
Next.js 16, React 19, Drizzle ORM (Postgres), Tailwind CSS 4, Radix UI, Biome, Vitest
