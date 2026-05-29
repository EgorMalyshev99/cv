<template>
  <ClientOnly>
    <UiButton
      variant="ghost"
      size="icon"
      :aria-label="isDark ? t('theme.light') : t('theme.dark')"
      @click="toggleTheme()"
    >
      <PhSun v-if="isDark" :size="16" />
      <PhMoon v-else :size="16" />
    </UiButton>
  </ClientOnly>
</template>

<script setup lang="ts">
import { PhMoon, PhSun } from '@phosphor-icons/vue'

const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()
</script>
