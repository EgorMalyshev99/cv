<template>
  <component :is="tag" :class="cn('glass-card', props.class)">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    tag?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    tag: 'div',
  }
)
</script>
