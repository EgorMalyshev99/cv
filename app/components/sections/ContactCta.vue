<template>
  <section id="contact" class="py-20 md:py-28">
    <div class="container">
      <GlassCard v-fade-up class="p-8 text-center md:p-12">
        <SectionHeading
          :eyebrow="t('contact.eyebrow')"
          :title="t('contact.title')"
          :subtitle="t('contact.subtitle')"
          centered
          class="mb-8"
        />
        <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ContactDialog>
            <Button size="lg" class="cta-glow">{{ t('contact.cta') }}</Button>
          </ContactDialog>
          <Button variant="outline" size="lg" @click="() => copyEmail()">
            {{ copied ? t('contact.copied') : t('contact.copy') }}
          </Button>
        </div>
        <p class="text-muted-foreground mt-4 text-sm">{{ CONTACT_EMAIL }}</p>
      </GlassCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'
import { Button } from '@/components/ui/button'
import GlassCard from '@/components/GlassCard.vue'
import SectionHeading from '@/components/layout/SectionHeading.vue'
import ContactDialog from '@/components/ContactDialog.vue'
import { CONTACT_EMAIL } from '@/config/site'
import { vFadeUp } from '@/composables/useFadeUp'

const { t } = useI18n()
const { copy: copyEmail, copied } = useCopyToClipboard(CONTACT_EMAIL)
</script>
