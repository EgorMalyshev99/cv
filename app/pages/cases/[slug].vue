<template>
  <article v-if="caseEntry">
    <div class="relative w-full overflow-hidden">
      <img
        :src="caseEntry.image"
        :alt="t(`cases.list.${slug}.title`)"
        class="h-48 w-full object-cover object-top md:h-64 lg:h-80"
        fetchpriority="high"
      />
      <div
        class="from-background/90 via-background/20 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent"
      />
    </div>

    <div class="container py-12 md:py-16">
      <NuxtLink
        to="/"
        class="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm
          transition-colors"
      >
        <PhArrowLeft :size="16" />
        {{ t('case.back') }}
      </NuxtLink>
      <header class="border-border mb-12 border-b pb-10">
        <img
          :src="caseEntry.logo"
          :alt="t(`cases.list.${slug}.company`)"
          class="mb-6 h-8 w-auto max-w-48 object-contain object-left md:h-10"
          width="192"
          height="40"
        />
        <p class="text-accent mb-3 text-sm font-medium">
          {{ t(`cases.list.${slug}.hero.eyebrow`) }}
        </p>
        <h1 class="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {{ t(`cases.list.${slug}.hero.title`) }}
        </h1>
        <p class="text-muted-foreground mt-4 text-lg leading-relaxed">
          {{ t(`cases.list.${slug}.hero.lead`) }}
        </p>
        <a
          :href="caseEntry.companyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-accent mt-5 inline-flex items-center gap-1.5 text-sm
            transition-colors"
        >
          {{ caseEntry.companyUrl.replace('https://', '') }}
          <PhArrowSquareOut :size="13" aria-hidden="true" />
        </a>
      </header>

      <CasesCaseSection :title="t('case.sections.context')" :paragraph="t(`cases.list.${slug}.context`)" />

      <CasesCaseSection :title="t('case.sections.stack')">
        <div class="space-y-4">
          <div v-for="group in caseEntry.stack" :key="group.groupKey">
            <h3 class="mb-2 text-sm font-semibold">{{ t(group.groupKey) }}</h3>
            <div class="flex flex-wrap gap-1.5">
              <TechTag v-for="item in group.items" :key="item">{{ item }}</TechTag>
            </div>
          </div>
        </div>
      </CasesCaseSection>

      <CasesCaseSection :title="t('case.sections.role')">
        <ul class="text-muted-foreground list-disc space-y-2 pl-5">
          <li v-for="(item, i) in roleItems" :key="i">{{ item }}</li>
        </ul>
      </CasesCaseSection>

      <CasesCaseSection :title="t('case.sections.tasks')">
        <ul class="text-muted-foreground list-disc space-y-2 pl-5">
          <li v-for="(item, i) in taskItems" :key="i">{{ item }}</li>
        </ul>
      </CasesCaseSection>

      <CasesCaseSection :title="t('case.sections.solution')">
        <ul class="text-muted-foreground list-disc space-y-2 pl-5">
          <li v-for="(item, i) in solutionItems" :key="i">{{ item }}</li>
        </ul>
      </CasesCaseSection>

      <CasesCaseSection :title="t('case.sections.delivered')">
        <ul class="text-muted-foreground list-disc space-y-2 pl-5">
          <li v-for="(item, i) in deliveredItems" :key="i">{{ item }}</li>
        </ul>
      </CasesCaseSection>

      <CasesCaseSection :title="t('case.sections.impact')">
        <ul class="space-y-3">
          <li
            v-for="(item, i) in impactItems"
            :key="i"
            class="text-muted-foreground flex gap-3 text-sm leading-relaxed"
          >
            <span class="bg-accent mt-1.5 size-1.5 shrink-0 rounded-full" />
            {{ item }}
          </li>
        </ul>
      </CasesCaseSection>

      <CasesCaseNav :slug="slug" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { PhArrowLeft, PhArrowSquareOut } from '@phosphor-icons/vue'
import { getCase, type CaseSlug } from '@/data/cases'
import { useSiteUrl } from '@/composables/useSiteUrl'

const route = useRoute()
const { t, tm, rt, locale } = useI18n()
const { baseUrl, pageUrl } = useSiteUrl()

const slug = computed(() => route.params.slug as CaseSlug)
const caseEntry = computed(() => getCase(slug.value))

if (!getCase(route.params.slug as string)) {
  throw createError({ statusCode: 404, statusMessage: 'Case not found', fatal: true })
}

const roleItems = computed(() => (tm(`cases.list.${slug.value}.role`) as string[]).map((item) => rt(item)))
const taskItems = computed(() => (tm(`cases.list.${slug.value}.tasks`) as string[]).map((item) => rt(item)))
const solutionItems = computed(() => (tm(`cases.list.${slug.value}.solution`) as string[]).map((item) => rt(item)))
const deliveredItems = computed(() => (tm(`cases.list.${slug.value}.delivered`) as string[]).map((item) => rt(item)))
const impactItems = computed(() => (tm(`cases.list.${slug.value}.impact`) as string[]).map((item) => rt(item)))

const ogLocale = computed(() => (locale.value === 'ru' ? 'ru_RU' : 'en_US'))
const alternateOgLocale = computed(() => (locale.value === 'ru' ? 'en_US' : 'ru_RU'))
const caseTitle = computed(() => (caseEntry.value ? t(`cases.list.${slug.value}.title`) : ''))
const caseDescription = computed(() =>
  caseEntry.value
    ? t('seo.case.description', {
        caseTitle: caseTitle.value,
        company: t(`cases.list.${slug.value}.company`),
      })
    : ''
)
const caseKeywords = computed(() =>
  caseEntry.value
    ? t('seo.case.keywords', {
        company: t(`cases.list.${slug.value}.company`),
      })
    : ''
)

const caseSchema = computed(() => {
  if (!caseEntry.value) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: caseTitle.value,
    description: caseDescription.value,
    inLanguage: locale.value,
    url: pageUrl.value,
    image: `${baseUrl.value}${caseEntry.value.image}`,
    author: {
      '@type': 'Person',
      name: t('hero.fullName'),
      jobTitle: t('seo.person.jobTitle'),
      url: baseUrl.value,
    },
    publisher: {
      '@type': 'Organization',
      name: t(`cases.list.${slug.value}.company`),
      url: caseEntry.value.companyUrl,
    },
    keywords: caseKeywords.value,
  }
})

useHead({
  titleTemplate: (title) => `${title} | ${t('seo.siteName')}`,
})

useSeoMeta({
  title: () => (caseEntry.value ? `${caseTitle.value} — ${t('seo.case.titleSuffix')}` : ''),
  description: () => caseDescription.value,
  keywords: () => caseKeywords.value,
  robots: 'index, follow',
  ogType: 'article',
  ogTitle: () => (caseEntry.value ? caseTitle.value : ''),
  ogDescription: () => caseDescription.value,
  ogUrl: () => pageUrl.value,
  ogSiteName: () => t('seo.siteName'),
  ogLocale: () => ogLocale.value,
  ogImage: () => (caseEntry.value ? `${baseUrl.value}${caseEntry.value.image}` : `${baseUrl.value}/img/hero-dark.png`),
  twitterCard: 'summary_large_image',
  twitterTitle: () => (caseEntry.value ? caseTitle.value : ''),
  twitterDescription: () => caseDescription.value,
  twitterImage: () =>
    caseEntry.value ? `${baseUrl.value}${caseEntry.value.image}` : `${baseUrl.value}/img/hero-dark.png`,
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
      key: 'case-schema',
      type: 'application/ld+json',
      textContent: () => (caseSchema.value ? JSON.stringify(caseSchema.value) : ''),
    },
  ],
})
</script>
