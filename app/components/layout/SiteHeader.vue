<template>
  <header class="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
    <div class="container flex h-16 items-center justify-between gap-4">
      <NuxtLink to="/" class="text-sm font-semibold tracking-tight md:text-base">
        <span class="md:hidden">
          <span class="text-gradient">FSDev</span>
          <span class="text-foreground"> - mobile</span>
        </span>
        <span class="hidden md:inline">
          <span class="text-gradient">Fullstack</span>
          <span class="text-foreground"> developer</span>
        </span>
      </NuxtLink>

      <nav class="text-muted-foreground hidden items-center gap-6 text-sm md:flex" aria-label="Main">
        <a href="#cases" class="hover:text-foreground transition">{{ t('nav.cases') }}</a>
        <a href="#stack" class="hover:text-foreground transition">{{ t('nav.stack') }}</a>
        <a href="#contact" class="hover:text-foreground transition">{{ t('nav.contact') }}</a>
        <a
          :href="cvUrl"
          download
          class="hover:text-foreground flex items-center gap-1.5 transition"
          :aria-label="t('nav.downloadCv')"
        >
          <PhDownloadSimple :size="14" />
          {{ t('nav.downloadCv') }}
        </a>
      </nav>

      <div class="flex items-center gap-1 sm:gap-2">
        <LocaleSwitcher />
        <ThemeToggle />
        <ContactDialog class="hidden sm:block">
          <Button size="sm" class="cta-glow">{{ t('nav.email') }}</Button>
        </ContactDialog>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { PhDownloadSimple } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ContactDialog from '@/components/ContactDialog.vue'

const { t, locale } = useI18n()

const cvUrl = computed(() => (locale.value === 'ru' ? '/Malyshev_E_M_cv_ru.pdf' : '/Malyshev_E_M_cv_en.pdf'))
</script>
