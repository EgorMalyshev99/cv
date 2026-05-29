<template>
  <section class="mb-10">
    <h2 class="mb-4 text-xl font-semibold tracking-tight">{{ title }}</h2>
    <p v-if="paragraph" class="text-muted-foreground leading-relaxed">{{ paragraph }}</p>
    <slot v-else />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  paragraph?: string
}>()
</script>
