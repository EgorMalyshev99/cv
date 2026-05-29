<template>
  <ClientOnly>
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        class="glow-blob absolute -top-32 -left-24 size-112 rounded-full opacity-40 blur-3xl"
        :style="{ background: `radial-gradient(circle, ${glow1} 0%, transparent 70%)` }"
      />
      <div
        class="glow-blob-delayed absolute top-1/3 -right-20 size-96 rounded-full opacity-35 blur-3xl"
        :style="{ background: `radial-gradient(circle, ${glow2} 0%, transparent 70%)` }"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { isDark } = useTheme()
const glow1 = computed(() => (isDark.value ? '#8fb0ff' : '#5a78ff'))
const glow2 = computed(() => (isDark.value ? '#6eeaff' : '#0cc8ea'))
</script>
