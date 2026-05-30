# AGENTS.md

Personal landing page for a Fullstack Developer (frontend-first, no explicit grade positioning).

## Stack

- Nuxt 4 (SSR) + Vue 3 (Composition API, `<script setup lang="ts">`)
- TypeScript
- Tailwind CSS v4 + shadcn-nuxt (reka-ui)
- `@nuxtjs/i18n` (RU / EN, `no_prefix`, cookie)
- `@nuxtjs/color-mode` (theme via cookie, class `dark` on `<html>`)
- `@phosphor-icons/vue` for icons
- `@vueuse/core`
- `@unhead/vue` via `useHead` / `useSeoMeta` per page

## Rules for agents

1. **Routing** — File-based routes under `app/pages/`. Do not add manual route arrays.
2. **i18n** — No hard-coded human-language strings in templates. Copy in `i18n/locales/ru.json` and `en.json`; use `t('key')`.
3. **Colors** — Hex values only in `app/assets/css/tailwind.css` (`:root` and `.dark`). Use semantic Tailwind tokens in components.
4. **Styling** — Prefer `GlassCard`, `SectionHeading`, `TechTag`. Use `@apply` only in `tailwind.css` `@layer base` / `utilities`.
5. **SFC order** — `template` → `script` → `style` (enforced by ESLint).
6. **Icons** — Use `@phosphor-icons/vue` only (not lucide).
7. **Cases** — Structure in `app/data/cases.ts`; translated text under `cases.list.<slug>.*` in locale files.
8. **Tooling** — Run `pnpm format` and `pnpm lint` before considering work done.

## Key paths

| Path                          | Purpose                                          |
| ----------------------------- | ------------------------------------------------ |
| `app/pages/`                  | Routes (`index.vue`, `cases/[slug].vue`)         |
| `app/components/`             | layout, sections, cases, ui                      |
| `i18n/locales/`               | RU / EN messages (lazy-loaded via `langDir`)     |
| `i18n/i18n.config.ts`         | vue-i18n runtime options only (no messages here) |
| `app/data/cases.ts`           | Case slugs, tags, stack                          |
| `app/composables/`            | `useTheme`, `useLocale`, `useSiteUrl`            |
| `app/assets/css/tailwind.css` | Design tokens + utilities                        |
