<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <LayoutSectionHeading
        :eyebrow="t('positioning.eyebrow')"
        :title="t('positioning.title')"
        :subtitle="t('positioning.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 md:grid-cols-2">
        <li v-for="(item, index) in items" :key="index" v-fade-up>
          <GlassCard class="p-5">
            <div class="flex items-start gap-3">
              <component
                :is="positioningIcons[index]"
                class="text-primary mt-0.5 shrink-0"
                :size="18"
                weight="duotone"
              />
              <p class="text-muted-foreground text-sm leading-relaxed">{{ item }}</p>
            </div>
          </GlassCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowsOut, PhDatabase, PhPackage, PhRocket, PhShieldCheck } from '@phosphor-icons/vue'
const { t, tm, rt } = useI18n()
const items = computed(() => (tm('positioning.items') as string[]).map((item) => rt(item)))

const positioningIcons = [PhRocket, PhArrowsOut, PhPackage, PhDatabase, PhShieldCheck]
</script>
