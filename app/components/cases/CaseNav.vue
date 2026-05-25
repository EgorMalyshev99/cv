<template>
  <nav class="border-border mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
    <NuxtLink to="/#cases" class="text-muted-foreground hover:text-foreground text-sm transition">
      ← {{ t('cases.nav.all') }}
    </NuxtLink>
    <div class="flex gap-4">
      <NuxtLink
        v-if="prevCase"
        :to="`/cases/${prevCase.slug}`"
        class="text-muted-foreground hover:text-foreground text-sm transition"
      >
        ← {{ t('cases.nav.prev') }}
      </NuxtLink>
      <NuxtLink
        v-if="nextCase"
        :to="`/cases/${nextCase.slug}`"
        class="text-muted-foreground hover:text-foreground text-sm transition"
      >
        {{ t('cases.nav.next') }} →
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { cases, getCaseIndex, type CaseSlug } from '@/data/cases'

const props = defineProps<{
  slug: CaseSlug
}>()

const { t } = useI18n()

const index = computed(() => getCaseIndex(props.slug))

const prevCase = computed(() => {
  const i = index.value
  return i > 0 ? cases[i - 1] : undefined
})

const nextCase = computed(() => {
  const i = index.value
  return i >= 0 && i < cases.length - 1 ? cases[i + 1] : undefined
})
</script>
