<template>
  <section id="cases" class="py-20 md:py-24">
    <div class="container">
      <SectionHeading
        :eyebrow="t('cases.section.eyebrow')"
        :title="t('cases.section.title')"
        :subtitle="t('cases.section.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-6 lg:grid-cols-3">
        <li v-for="caseEntry in cases" :key="caseEntry.slug" v-fade-up>
          <CaseCard :case-entry="caseEntry" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import CaseCard from '@/components/cases/CaseCard.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { cases } from '@/data/cases'
import { vFadeUp } from '@/composables/useFadeUp'

const { t } = useI18n()
</script>
