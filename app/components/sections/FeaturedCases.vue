<template>
  <section id="cases" class="py-20 md:py-24">
    <div class="container">
      <LayoutSectionHeading
        :eyebrow="t('cases.section.eyebrow')"
        :title="t('cases.section.title')"
        :subtitle="t('cases.section.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-6 lg:grid-cols-3">
        <li v-for="caseEntry in cases" :key="caseEntry.slug">
          <CasesCaseCard :case-entry="caseEntry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cases } from '@/data/cases'

const { t } = useI18n()
</script>
