<template>
  <div class="relative min-h-screen">
    <LayoutBackgroundGlow />
    <div class="bg-grid pointer-events-none fixed inset-0 z-0" />
    <LayoutSiteHeader />
    <main class="relative z-10">
      <NuxtPage />
    </main>
    <LayoutSiteFooter />
  </div>
</template>

<script setup lang="ts">
useLocale()
</script>
