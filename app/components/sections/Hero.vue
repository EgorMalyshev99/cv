<template>
  <section class="py-20 md:py-28 lg:py-32">
    <div class="container grid items-center gap-12 md:grid-cols-2">
      <div v-fade-up>
        <UiDialog>
          <UiDialogTrigger as-child>
            <div
              class="border-border/70 bg-card/80 mb-6 inline-flex cursor-zoom-in items-center gap-3 rounded-full border
                px-2 py-2 pr-4 shadow-sm transition-opacity hover:opacity-80"
            >
              <img
                src="/me.jpg"
                :alt="t('hero.photoAlt')"
                class="ring-border/60 size-12 rounded-full object-cover ring-1"
              />
              <div class="leading-tight">
                <p class="text-sm font-semibold">{{ t('hero.fullName') }}</p>
                <p class="text-muted-foreground text-xs">{{ t('hero.fullRole') }}</p>
              </div>
            </div>
          </UiDialogTrigger>
          <UiDialogContent class="border-0 bg-transparent p-0 shadow-none sm:max-w-xl" :show-close-button="false">
            <img src="/me.jpg" :alt="t('hero.photoAlt')" class="w-full rounded-2xl object-cover shadow-2xl" />
          </UiDialogContent>
        </UiDialog>
        <p class="text-accent mb-4 text-sm font-medium tracking-wide">{{ t('hero.eyebrow') }}</p>
        <h1 class="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="text-muted-foreground mt-6 text-lg leading-relaxed">{{ t('hero.lead') }}</p>
        <p class="text-muted-foreground/90 mt-4 text-base leading-relaxed">{{ t('hero.body') }}</p>
        <p class="text-muted-foreground/80 mt-3 text-base leading-relaxed">{{ t('hero.support') }}</p>
        <p class="text-muted-foreground/70 mt-3 text-sm leading-relaxed">{{ t('hero.meta') }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <UiButton as-child size="lg" class="cta-glow">
            <a href="#contact">{{ t('hero.ctaPrimary') }}</a>
          </UiButton>
          <UiButton as-child variant="outline" size="lg">
            <a href="#cases">{{ t('hero.ctaSecondary') }}</a>
          </UiButton>
          <UiButton as-child variant="ghost" size="lg">
            <a href="/Malyshev_E_M_fullstack_cv.pdf" download class="inline-flex items-center gap-2">
              <PhDownloadSimple :size="16" />
              {{ t('hero.ctaDownloadCv') }}
            </a>
          </UiButton>
        </div>
      </div>
      <ClientOnly>
        <div v-fade-up class="relative flex items-center justify-center">
          <img
            :src="isDark ? '/img/hero-dark.png' : '/img/hero-light.png'"
            :alt="t('hero.photoAlt')"
            class="h-auto max-w-full object-contain object-center"
          />
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhDownloadSimple } from '@phosphor-icons/vue'

const { t } = useI18n()
const { isDark } = useTheme()
</script>
