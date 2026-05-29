<template>
  <section class="py-20 md:py-24">
    <div class="container">
      <GlassCard v-fade-up class="p-8 md:p-10">
        <LayoutSectionHeading
          :eyebrow="t('international.eyebrow')"
          :title="t('international.title')"
          :subtitle="t('international.subtitle')"
          class="mb-8"
        />
        <ul class="space-y-3">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="text-muted-foreground flex gap-3 text-sm leading-relaxed"
          >
            <span class="bg-accent mt-1.5 size-1.5 shrink-0 rounded-full" />
            {{ item }}
          </li>
        </ul>
      </GlassCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const items = computed(() => (tm('international.items') as string[]).map((item) => rt(item)))
</script>
