<template>
  <ClientOnly>
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        class="glow-blob absolute -top-32 -left-24 size-112 rounded-full opacity-30 blur-3xl"
        :style="{ background: `radial-gradient(circle, ${glow1} 0%, transparent 70%)` }"
      />
      <div
        class="glow-blob-delayed absolute top-1/3 -right-20 size-96 rounded-full opacity-25 blur-3xl"
        :style="{ background: `radial-gradient(circle, ${glow2} 0%, transparent 70%)` }"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
const glow1 = computed(() => (isDark.value ? '#7aa2ff' : '#4f6bff'))
const glow2 = computed(() => (isDark.value ? '#5ee3ff' : '#0ab6d6'))
</script>
