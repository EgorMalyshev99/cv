<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <LayoutSectionHeading
        :eyebrow="t('positioning.eyebrow')"
        :title="t('positioning.title')"
        :subtitle="t('positioning.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 lg:grid-cols-3">
        <li v-for="(item, index) in items" :key="item.title" class="h-full">
          <GlassCard class="flex h-full flex-col p-6">
            <div class="mb-4 flex items-center gap-3">
              <span class="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-2xl">
                <component :is="positioningIcons[index]" :size="20" weight="duotone" />
              </span>
              <h3 class="text-foreground font-semibold">{{ item.title }}</h3>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ item.description }}</p>
            <ul class="mt-5 space-y-3">
              <li v-for="point in item.points" :key="point" class="flex gap-3">
                <span class="bg-primary mt-2 size-1.5 shrink-0 rounded-full" />
                <span class="text-muted-foreground text-sm leading-relaxed">{{ point }}</span>
              </li>
            </ul>
          </GlassCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowsOut, PhRocket, PhUsersThree } from '@phosphor-icons/vue'

interface PositioningItem {
  title: string
  description: string
  points: string[]
}

const { t, tm, rt } = useI18n()
const items = computed(() =>
  (tm('positioning.items') as PositioningItem[]).map((item) => ({
    title: rt(item.title),
    description: rt(item.description),
    points: item.points.map((point) => rt(point)),
  }))
)

const positioningIcons = [PhRocket, PhArrowsOut, PhUsersThree] as const
</script>
