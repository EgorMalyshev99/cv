<template>
  <section id="contact" class="py-20 md:py-28">
    <div class="container">
      <GlassCard class="p-8 text-center md:p-12">
        <LayoutSectionHeading
          :eyebrow="t('contact.eyebrow')"
          :title="t('contact.title')"
          :subtitle="t('contact.subtitle')"
          centered
          class="mb-8"
        />
        <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ContactDialog>
            <UiButton size="lg" class="cta-glow">{{ t('contact.cta') }}</UiButton>
          </ContactDialog>
          <UiButton variant="outline" size="lg" @click="() => copyEmail()">
            {{ copied ? t('contact.copied') : t('contact.copy') }}
          </UiButton>
        </div>
        <p class="text-muted-foreground mt-4 text-sm">{{ CONTACT_EMAIL }}</p>
      </GlassCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { CONTACT_EMAIL } from '@/config/site'

const { t } = useI18n()
const { copy: copyEmail, copied } = useClipboard({ source: CONTACT_EMAIL })
</script>
