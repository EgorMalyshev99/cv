<template>
  <header v-fade-up :class="cn('max-w-3xl', centered && 'mx-auto text-center', props.class)">
    <p v-if="eyebrow" class="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { vFadeUp } from '@/composables/useFadeUp'

const props = defineProps<{
  eyebrow?: string
  title?: string
  subtitle?: string
  centered?: boolean
  class?: HTMLAttributes['class']
}>()
</script>
