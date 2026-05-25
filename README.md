# Frontend Developer — Personal Landing (Nuxt 4)

Premium personal landing page with SSR and SEO for HR, CTOs, and international teams.

## Stack

- **Nuxt 4** + Vue 3 + TypeScript
- **Tailwind CSS v4** + shadcn-nuxt (reka-ui)
- **@nuxtjs/i18n** — Russian (default) and English (`no_prefix`, cookie)
- **@nuxtjs/color-mode** — light/dark theme
- **@nuxtjs/sitemap** + **@nuxtjs/robots**
- **@phosphor-icons/vue**

## Scripts

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm preview      # preview production build
pnpm lint         # ESLint
pnpm lint:fix     # ESLint with auto-fix
pnpm format       # Prettier
```

## Project structure

```txt
app/
  pages/           # Routes (index.vue, cases/[slug].vue)
  components/      # layout, sections, cases, ui
  composables/     # useTheme, useLocale, useSiteUrl, useFadeUp
  data/cases.ts    # Case slugs, tags, stack
  assets/css/      # tailwind.css (design tokens)
i18n/locales/      # ru.json, en.json (lazy-loaded)
i18n/i18n.config.ts # vue-i18n runtime options only
public/            # images, CV PDFs, favicon
```

## Environment

Copy `.env.example` to `.env` and set your production URL (build fails site-config checks with `localhost`):

```env
NUXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Routing

| File                         | URL            |
| ---------------------------- | -------------- |
| `app/pages/index.vue`        | `/`            |
| `app/pages/cases/[slug].vue` | `/cases/:slug` |

## Theme & locale

- **Theme**: `@nuxtjs/color-mode`, `storageKey: theme`, class `.dark` on `<html>`.
- **Locale**: RU / EN switcher; cookie `locale`; default `ru`, fallback `en`.
