<template>
  <div>
    <SectionsHero />
    <SectionsPositioning />
    <SectionsTechStack />
    <SectionsAiSkills />
    <SectionsAchievements />
    <SectionsFeaturedCases />
    <SectionsInternational />
    <SectionsContactCta />
  </div>
</template>

<script setup lang="ts">
import { useSiteUrl } from '@/composables/useSiteUrl'

const { t, locale } = useI18n()
const { baseUrl, pageUrl } = useSiteUrl()

const ogLocale = computed(() => (locale.value === 'ru' ? 'ru_RU' : 'en_US'))
const alternateOgLocale = computed(() => (locale.value === 'ru' ? 'en_US' : 'ru_RU'))
const keywords = computed(() => t('seo.home.keywords'))

const personSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: t('hero.fullName'),
  jobTitle: t('seo.person.jobTitle'),
  description: t('seo.person.description'),
  image: `${baseUrl.value}/me.jpg`,
  url: baseUrl.value,
  sameAs: [],
  knowsAbout: [
    'Frontend Development',
    'Backend Development',
    'TypeScript',
    'Vue',
    'React',
    'Node.js',
    'NestJS',
    'SaaS',
    'Dashboard UI',
    'Design Systems',
    'AI-assisted Development',
  ],
}))

const websiteSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: t('seo.siteName'),
  url: baseUrl.value,
  inLanguage: locale.value,
}))

useHead({
  titleTemplate: (title) => `${title} | ${t('seo.siteName')}`,
})

useSeoMeta({
  title: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
  keywords: () => keywords.value,
  robots: 'index, follow',
  author: () => t('hero.fullName'),
  ogType: 'website',
  ogTitle: () => t('seo.home.ogTitle'),
  ogDescription: () => t('seo.home.ogDescription'),
  ogUrl: () => pageUrl.value,
  ogSiteName: () => t('seo.siteName'),
  ogLocale: () => ogLocale.value,
  ogImage: () => `${baseUrl.value}/img/hero-dark.png`,
  ogImageAlt: () => t('hero.photoAlt'),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.home.ogTitle'),
  twitterDescription: () => t('seo.home.ogDescription'),
  twitterImage: () => `${baseUrl.value}/img/hero-dark.png`,
})

useHead({
  link: [
    { rel: 'canonical', href: () => pageUrl.value },
    { rel: 'alternate', hreflang: () => locale.value, href: () => pageUrl.value },
    {
      rel: 'alternate',
      hreflang: () => alternateOgLocale.value.replace('_', '-'),
      href: () => pageUrl.value,
    },
    { rel: 'alternate', hreflang: 'x-default', href: () => pageUrl.value },
  ],
  meta: [{ property: 'og:locale:alternate', content: () => alternateOgLocale.value }],
  script: [
    {
      key: 'person-schema',
      type: 'application/ld+json',
      textContent: () => JSON.stringify(personSchema.value),
    },
    {
      key: 'website-schema',
      type: 'application/ld+json',
      textContent: () => JSON.stringify(websiteSchema.value),
    },
  ],
})
</script>
