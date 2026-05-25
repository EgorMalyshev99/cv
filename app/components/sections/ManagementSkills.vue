<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <SectionHeading
        :eyebrow="t('management.eyebrow')"
        :title="t('management.title')"
        :subtitle="t('management.subtitle')"
        class="mb-10"
      />
      <ul class="grid gap-4 sm:grid-cols-2">
        <li v-for="(item, index) in items" :key="index" v-fade-up>
          <GlassCard class="h-full p-5">
            <h3 class="text-foreground mb-2 flex items-center gap-2 font-semibold">
              <component :is="managementIcons[index]" class="text-primary shrink-0" :size="18" weight="duotone" />
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
import { PhChatsCircle, PhGitPullRequest, PhGraduationCap, PhUsersThree } from '@phosphor-icons/vue'
import GlassCard from '@/components/GlassCard.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import { vFadeUp } from '@/composables/useFadeUp'

interface ManagementItem {
  title: string
  description: string
}

const { t, tm, rt } = useI18n()
const items = computed(() =>
  (tm('management.items') as ManagementItem[]).map((item) => ({
    title: rt(item.title),
    description: rt(item.description),
  }))
)

const managementIcons = [PhUsersThree, PhGitPullRequest, PhGraduationCap, PhChatsCircle]
</script>
