<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <LayoutSectionHeading
        :eyebrow="t('achievements.eyebrow')"
        :title="t('achievements.title')"
        :subtitle="t('achievements.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 md:grid-cols-3">
        <li v-for="(item, index) in items" :key="index">
          <GlassCard class="h-full p-5">
            <p class="text-primary text-2xl font-semibold tracking-tight">{{ item.metric }}</p>
            <p class="text-foreground mt-3 flex items-center gap-2 text-sm font-medium">
              <component :is="achievementIcons[index]" :size="16" weight="duotone" />
              {{ item.title }}
            </p>
            <p class="text-muted-foreground mt-2 text-sm leading-relaxed">{{ item.description }}</p>
          </GlassCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhChartLineUp, PhCircuitry, PhLightning, PhRocketLaunch, PhUserPlus } from '@phosphor-icons/vue'
interface AchievementItem {
  metric: string
  title: string
  description: string
}

const { t, tm, rt } = useI18n()
const items = computed(() =>
  (tm('achievements.items') as AchievementItem[]).map((item) => ({
    metric: rt(item.metric),
    title: rt(item.title),
    description: rt(item.description),
  }))
)

const achievementIcons = [PhLightning, PhRocketLaunch, PhChartLineUp, PhCircuitry, PhUserPlus]
</script>
