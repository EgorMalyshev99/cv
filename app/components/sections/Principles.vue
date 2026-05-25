<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <SectionHeading
        :eyebrow="t('principles.eyebrow')"
        :title="t('principles.title')"
        :subtitle="t('principles.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 sm:grid-cols-2">
        <li v-for="(item, index) in items" :key="index" v-fade-up>
          <GlassCard class="p-5">
            <h3 class="mb-2 flex items-center gap-2 font-semibold">
              <component :is="principleIcons[index]" class="text-primary shrink-0" :size="18" weight="duotone" />
              {{ item.title }}
            </h3>
            <p class="text-muted-foreground mt-2 text-sm leading-relaxed">{{ item.description }}</p>
          </GlassCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowsOut, PhChatsCircle, PhLightbulb, PhRecycle } from '@phosphor-icons/vue'
import GlassCard from '@/components/GlassCard.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { vFadeUp } from '@/composables/useFadeUp'

interface PrincipleItem {
  title: string
  description: string
}

const { t, tm } = useI18n()
const items = computed(() => tm('principles.items') as PrincipleItem[])

const principleIcons = [PhArrowsOut, PhLightbulb, PhRecycle, PhChatsCircle]
</script>
