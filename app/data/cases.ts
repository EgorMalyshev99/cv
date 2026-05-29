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
      'RBAC',
      'Socket.io',
      'YouTrack',
      'Highcharts',
      'GSAP',
      'NestJS',
      'PostgreSQL',
      'Vitest',
      'CI/CD',
      'GitLab',
      'Design System',
    ],
    stack: [
      { groupKey: 'cases.stackGroups.core', items: ['Vue 3', 'Nuxt', 'TypeScript'] },
      { groupKey: 'cases.stackGroups.architecture', items: ['FSD', 'Turborepo', 'Design System', 'RBAC'] },
      {
        groupKey: 'cases.stackGroups.backend',
        items: ['Node.js', 'NestJS', 'PHP', 'Yii2', 'PostgreSQL', 'REST API'],
      },
      {
        groupKey: 'cases.stackGroups.data',
        items: ['TanStack Query', 'TanStack Table', 'Highcharts', 'Socket.io', 'GSAP', 'YouTrack API'],
      },
      { groupKey: 'cases.stackGroups.ops', items: ['Vitest', 'CI/CD', 'GitLab CI/CD'] },
    ],
  },
  {
    slug: 'interactive-form-ai-dashboard',
    companyUrl: 'https://interactiveform.com',
    image: '/img/interactiveform-case.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'NX Monorepo', 'FSD', 'NestJS', 'TanStack Query', 'Zod', 'Zustand'],
    stack: [
      { groupKey: 'cases.stackGroups.core', items: ['React', 'Next.js', 'TypeScript'] },
      { groupKey: 'cases.stackGroups.architecture', items: ['NX Monorepo', 'FSD', 'Zustand'] },
      { groupKey: 'cases.stackGroups.backend', items: ['Node.js', 'NestJS', 'REST API'] },
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
      'PHP',
      'Yii2',
      'PostgreSQL',
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
        groupKey: 'cases.stackGroups.backend',
        items: ['PHP', 'Yii2', 'PostgreSQL', 'REST API'],
      },
      {
        groupKey: 'cases.stackGroups.platform',
        items: ['Telegram WebView', 'Highcharts', 'Bootstrap UI', 'Mantine UI'],
      },
      { groupKey: 'cases.stackGroups.ops', items: ['Docker', 'GitLab CI/CD', 'CI/CD', 'Jest'] },
    ],
  },
]

export const getCase = (slug: string): CaseEntry | undefined => cases.find((c) => c.slug === slug)

export const getCaseIndex = (slug: string): number => cases.findIndex((c) => c.slug === slug)
