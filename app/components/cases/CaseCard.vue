<template>
  <NuxtLink :to="`/cases/${caseEntry.slug}`" class="group block h-full">
    <GlassCard class="flex h-full flex-col overflow-hidden p-0">
      <div class="relative overflow-hidden">
        <img
          :src="caseEntry.image"
          :alt="t(`cases.list.${caseEntry.slug}.title`)"
          class="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div class="from-card/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
      </div>
      <div class="flex flex-1 flex-col p-6">
        <p class="text-accent text-xs font-medium tracking-wide uppercase">
          {{ t(`cases.list.${caseEntry.slug}.company`) }} · {{ t(`cases.list.${caseEntry.slug}.stackLine`) }}
        </p>
        <h3 class="group-hover:text-accent mt-3 text-xl font-semibold tracking-tight transition-colors">
          {{ t(`cases.list.${caseEntry.slug}.title`) }}
        </h3>
        <p class="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
          {{ t(`cases.list.${caseEntry.slug}.preview`) }}
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <TechTag v-for="tag in caseEntry.tags" :key="tag">{{ tag }}</TechTag>
        </div>
        <p class="text-accent mt-5 text-sm font-medium">{{ t('cases.section.cta') }} →</p>
      </div>
    </GlassCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CaseEntry } from '@/data/cases'
import GlassCard from '@/components/GlassCard.vue'
import TechTag from '@/components/TechTag.vue'

defineProps<{
  caseEntry: CaseEntry
}>()

const { t } = useI18n()
</script>
