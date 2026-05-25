<template>
  <div class="border-border bg-muted/50 inline-flex rounded-full border p-0.5">
    <button
      v-for="loc in locales"
      :key="loc"
      type="button"
      :class="
        cn(
          'rounded-full px-2.5 py-1 text-xs font-medium transition',
          locale === loc ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
        )
      "
      @click="setLocale(loc)"
    >
      {{ t(`locale.${loc}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const locales = ['ru', 'en'] as const

const { locale, setLocale, t } = useI18n()
</script>
