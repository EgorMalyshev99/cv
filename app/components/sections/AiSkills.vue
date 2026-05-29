<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <LayoutSectionHeading
        :eyebrow="t('aiSkills.eyebrow')"
        :title="t('aiSkills.title')"
        :subtitle="t('aiSkills.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 sm:grid-cols-2">
        <li v-for="(item, index) in items" :key="index" v-fade-up>
          <GlassCard class="h-full p-5">
            <h3 class="text-foreground mb-2 flex items-center gap-2 font-semibold">
              <component :is="aiIcons[index]" class="text-primary shrink-0" :size="18" weight="duotone" />
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
import { PhBracketsCurly, PhFileText, PhRobot, PhTestTube } from '@phosphor-icons/vue'
interface AiSkillItem {
  title: string
  description: string
}

const { t, tm, rt } = useI18n()
const items = computed(() =>
  (tm('aiSkills.items') as AiSkillItem[]).map((item) => ({
    title: rt(item.title),
    description: rt(item.description),
  }))
)

const aiIcons = [PhRobot, PhBracketsCurly, PhTestTube, PhFileText]
</script>
