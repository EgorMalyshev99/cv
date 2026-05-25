<template>
  <section id="stack" class="py-20 md:py-24">
    <div class="container">
      <SectionHeading
        :eyebrow="t('stack.eyebrow')"
        :title="t('stack.title')"
        :subtitle="t('stack.subtitle')"
        class="mb-10"
      />
      <div class="grid gap-6 md:grid-cols-2">
        <GlassCard v-for="(group, index) in groups" :key="index" v-fade-up class="p-5">
          <h3 class="text-foreground mb-3 flex items-center gap-2 text-sm font-semibold">
            <component :is="groupIcons[index]" class="text-primary shrink-0" :size="18" weight="duotone" />
            {{ group.title }}
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <TechTag v-for="item in group.items" :key="item">{{ item }}</TechTag>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhBracketsCurly, PhChartBar, PhPalette, PhTreeStructure } from '@phosphor-icons/vue'
import GlassCard from '@/components/GlassCard.vue'
import TechTag from '@/components/TechTag.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { vFadeUp } from '@/composables/useFadeUp'

interface StackGroup {
  title: string
  items: string[]
}

const { t, tm } = useI18n()
const groups = computed(() => tm('stack.groups') as StackGroup[])

const groupIcons = [PhBracketsCurly, PhTreeStructure, PhChartBar, PhPalette]
</script>
