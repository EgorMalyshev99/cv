<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <SectionHeading
        :eyebrow="t('expertise.eyebrow')"
        :title="t('expertise.title')"
        :subtitle="t('expertise.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="(item, index) in items" :key="index" v-fade-up>
          <GlassCard class="h-full p-5">
            <h3 class="text-foreground mb-2 flex items-center gap-2 font-semibold">
              <component :is="expertiseIcons[index]" class="text-primary shrink-0" :size="18" weight="duotone" />
              {{ item.title }}
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ item.description }}</p>
          </GlassCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhArrowsClockwise,
  PhChalkboardTeacher,
  PhCube,
  PhGlobe,
  PhGraph,
  PhLayout,
  PhShieldCheck,
  PhWaveform,
} from '@phosphor-icons/vue'
import GlassCard from '@/components/GlassCard.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { vFadeUp } from '@/composables/useFadeUp'

interface ExpertiseItem {
  title: string
  description: string
}

const { t, tm } = useI18n()
const items = computed(() => tm('expertise.items') as ExpertiseItem[])

const expertiseIcons = [
  PhLayout,
  PhGlobe,
  PhGraph,
  PhCube,
  PhWaveform,
  PhArrowsClockwise,
  PhShieldCheck,
  PhChalkboardTeacher,
]
</script>
