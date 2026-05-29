<template>
  <UiButton variant="ghost" size="icon" @click="toggleTheme()">
    <span class="sr-only dark:hidden">{{ t('theme.dark') }}</span>
    <span class="sr-only hidden dark:inline">{{ t('theme.light') }}</span>
    <PhSun :size="16" class="hidden dark:block" />
    <PhMoon :size="16" class="dark:hidden" />
  </UiButton>
</template>

<script setup lang="ts">
import { PhMoon, PhSun } from '@phosphor-icons/vue'

const { t } = useI18n()
const { toggleTheme } = useTheme()
</script>
