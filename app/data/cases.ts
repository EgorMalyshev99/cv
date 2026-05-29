export type CaseSlug = 'rizzult-dashboard' | 'interactive-form-ai-dashboard' | 'perfluence-legacy-migration'

export interface CaseStackGroup {
  groupKey: string
  items: string[]
}

export interface CaseEntry {
  slug: CaseSlug
  companyUrl: string
  image: string
  tags: string[]
  stack: CaseStackGroup[]
}

export const cases: CaseEntry[] = [
  {
    slug: 'rizzult-dashboard',
    companyUrl: 'https://rizzult.ai',
    image: '/img/rizzult-case.jpg',
    tags: [
      'Vue',
      'Nuxt',
      'TypeScript',
      'FSD',
      'Turborepo',
      'Socket.io',
      'Highcharts',
      'GSAP',
      'Vitest',
      'CI/CD',
      'GitLab',
      'Design System',
    ],
    stack: [
      { groupKey: 'cases.stackGroups.core', items: ['Vue 3', 'Nuxt', 'TypeScript'] },
      { groupKey: 'cases.stackGroups.architecture', items: ['FSD', 'Turborepo', 'Design System'] },
      { groupKey: 'cases.stackGroups.data', items: ['TanStack Query', 'TanStack Table', 'Highcharts', 'Socket.io'] },
      { groupKey: 'cases.stackGroups.ops', items: ['Vitest', 'GSAP', 'CI/CD', 'GitLab CI/CD'] },
    ],
  },
  {
    slug: 'interactive-form-ai-dashboard',
    companyUrl: 'https://interactiveform.com',
    image: '/img/interactiveform-case.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'NX Monorepo', 'FSD', 'TanStack Query', 'Zod', 'Zustand'],
    stack: [
      { groupKey: 'cases.stackGroups.core', items: ['React', 'Next.js', 'TypeScript'] },
      { groupKey: 'cases.stackGroups.architecture', items: ['NX Monorepo', 'FSD', 'Zustand'] },
      { groupKey: 'cases.stackGroups.data', items: ['TanStack Query', 'TanStack Table', 'Zod'] },
    ],
  },
  {
    slug: 'perfluence-legacy-migration',
    companyUrl: 'https://perfluence.net',
    image: '/img/perfluence-case.jpg',
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'REST API',
      'SCSS',
      'Bootstrap UI',
      'Mantine UI',
      'Highcharts',
      'Jest',
      'CI/CD',
      'Docker',
      'GitLab',
    ],
    stack: [
      { groupKey: 'cases.stackGroups.core', items: ['React', 'Next.js', 'TypeScript', 'SCSS'] },
      {
        groupKey: 'cases.stackGroups.platform',
        items: ['Telegram WebView', 'REST API', 'Highcharts', 'Bootstrap UI', 'Mantine UI'],
      },
      { groupKey: 'cases.stackGroups.ops', items: ['Docker', 'GitLab CI/CD', 'CI/CD', 'Jest'] },
    ],
  },
]

export const getCase = (slug: string): CaseEntry | undefined => cases.find((c) => c.slug === slug)

export const getCaseIndex = (slug: string): number => cases.findIndex((c) => c.slug === slug)
