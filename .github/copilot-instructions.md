# GitHub Copilot Instructions

- Respose with Chinese
- 每完成一个功能模块后，必须运行格式检查（`pnpm lint` + `pnpm format:check`）和类型检查（`pnpm typecheck`），确认无报错后再继续下一个功能

## Project Overview

This is a **personal developer tools showcase website** — a static site that presents the developer's own built tools/utilities in a clean, card-based navigation layout. The site is deployed via **GitHub Pages** using Next.js static export.

## Tech Stack

- **Framework:** Next.js 14+ (App Router, `output: 'export'` for static GitHub Pages)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3 + CSS variables for theming
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Package Manager:** pnpm
- **Linting:** ESLint + Prettier

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (theme provider, nav, footer)
│   ├── page.tsx            # Home page (hero + featured tools)
│   ├── tools/
│   │   ├── page.tsx        # All tools catalog with filter/search
│   │   └── [slug]/
│   │       └── page.tsx    # Individual tool detail page
│   └── about/
│       └── page.tsx        # About / contact page
├── components/
│   ├── ui/                 # shadcn/ui generated components
│   ├── layout/             # Header, Footer, Sidebar
│   ├── tools/              # ToolCard, ToolGrid, CategoryFilter, SearchBar
│   └── common/             # ThemeToggle, Badge, Tag
├── data/
│   └── tools.ts            # Static tool data (the source of truth)
├── types/
│   └── tool.ts             # TypeScript interfaces
└── lib/
    └── utils.ts            # cn() helper and shared utilities
public/
├── icons/                  # Tool logos/screenshots (PNG/WebP)
└── og-image.png            # OpenGraph image
```

## Coding Conventions

### TypeScript

- Use `interface` over `type` for object shapes
- Always type function return values explicitly
- Prefer `const` assertions for static data arrays
- Never use `any`; use `unknown` + type narrowing when needed

### React / Next.js

- Use Server Components by default; add `'use client'` only when hooks/events are needed
- Prefer `async/await` in Server Components over `useEffect` for data
- All tool data is static (in `data/tools.ts`) — no API calls needed
- Use `next/image` for all images with explicit `width`/`height` or `fill`
- Use `next/link` for all internal navigation
- File names: kebab-case for files, PascalCase for component exports

### Tailwind CSS

- Use Tailwind utility classes directly; avoid custom CSS unless strictly necessary
- Dark mode via `class` strategy (`dark:` prefix)
- Define design tokens in `tailwind.config.ts` (colors, fonts, border-radius)
- Use `cn()` from `lib/utils.ts` for conditional class merging
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

### Component Patterns

- Each component in its own file; no barrel `index.ts` unless the folder has 4+ exports
- Props interfaces defined in the same file as the component
- Keep components focused — split if a component exceeds ~120 lines
- Use `React.forwardRef` for components that wrap HTML elements

## Data Model (see `types/tool.ts`)

```typescript
interface Tool {
  slug: string; // URL-friendly unique ID
  name: string; // Display name
  description: string; // Short tagline (≤ 80 chars)
  longDescription?: string; // Markdown body for detail page
  category: ToolCategory; // Primary category enum
  tags: string[]; // Searchable tags
  icon: string; // Path under /public/icons/ or emoji fallback
  url?: string; // Live demo URL
  githubUrl?: string; // Source repo URL
  status: 'stable' | 'beta' | 'archived';
  featured?: boolean; // Show in hero "Featured" section
  screenshots?: string[]; // Paths under /public/screenshots/
}

type ToolCategory = 'productivity' | 'developer' | 'design' | 'data' | 'media' | 'other';
```

## GitHub Pages Deployment

- `next.config.ts` must have `output: 'export'` and `basePath` set to the repo name
- `trailingSlash: true` is required for static export routing
- Add `.nojekyll` file in `public/` to disable Jekyll processing
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to `gh-pages` branch
- Images must use unoptimized mode: `images: { unoptimized: true }`

## Design Principles

- **Clean & minimal:** generous whitespace, clear hierarchy
- **Card-first layout:** every tool is a card; grid adapts from 1 → 2 → 3 → 4 columns
- **Fast & accessible:** WCAG AA contrast, keyboard-navigable, semantic HTML
- **Dark mode first:** default to dark, with smooth light-mode toggle
- **No heavy dependencies:** keep bundle lean; lazy-load detail pages

## Key Behaviors

- Searching filters tools in real-time (client-side, no debounce under 300ms)
- Category filter tabs above the grid reset the search query
- Featured tools appear in the hero section (max 6); they also appear in the full catalog
- Tool cards show: icon, name, description, category badge, status badge, GitHub/demo links
- The detail page renders `longDescription` as Markdown using `react-markdown`

## What Copilot Should NOT Do

- Do not add authentication, user accounts, or a CMS
- Do not add a database or API routes
- Do not use CSS Modules or styled-components
- Do not use `pages/` router — App Router only
- Do not hardcode tool data outside of `data/tools.ts`
- Do not add third-party analytics that require user consent banners
