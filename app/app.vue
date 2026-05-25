<template>
  <div class="relative min-h-screen">
    <BackgroundGlow />
    <div class="bg-grid pointer-events-none fixed inset-0 z-0" />
    <SiteHeader />
    <main class="relative z-10">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import BackgroundGlow from '@/components/layout/BackgroundGlow.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import { useLocale } from '@/composables/useLocale'

useLocale()
</script>
