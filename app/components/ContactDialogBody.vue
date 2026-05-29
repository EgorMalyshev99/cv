<template>
  <div class="flex flex-col gap-3 py-2">
    <a
      v-for="link in SOCIAL_LINKS"
      :key="link.key"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="border-border hover:bg-muted flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
    >
      <PhGithubLogo v-if="link.key === 'github'" :size="20" class="text-muted-foreground shrink-0" />
      <PhTelegramLogo v-else-if="link.key === 'telegram'" :size="20" class="text-muted-foreground shrink-0" />
      <PhLinkedinLogo v-else-if="link.key === 'linkedin'" :size="20" class="text-muted-foreground shrink-0" />
      <span class="text-sm font-medium">{{ link.label }}</span>
      <PhArrowSquareOut :size="14" class="text-muted-foreground ml-auto shrink-0" />
    </a>

    <div class="border-border flex items-center justify-between rounded-lg border px-4 py-3">
      <div class="flex items-center gap-3">
        <PhEnvelope :size="20" class="text-muted-foreground shrink-0" />
        <div>
          <p class="text-muted-foreground text-xs">{{ t('contact.dialog.emailLabel') }}</p>
          <p class="text-sm font-medium">{{ CONTACT_EMAIL }}</p>
        </div>
      </div>
      <button
        class="text-muted-foreground hover:text-foreground ml-3 shrink-0 text-xs transition-colors"
        @click="() => copyEmail()"
      >
        {{ emailCopied ? t('contact.dialog.copied') : t('contact.dialog.copyEmail') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { PhArrowSquareOut, PhEnvelope, PhGithubLogo, PhLinkedinLogo, PhTelegramLogo } from '@phosphor-icons/vue'
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/config/site'

const { t } = useI18n()
const { copy: copyEmail, copied: emailCopied } = useClipboard({
  source: CONTACT_EMAIL,
  legacy: true,
})
</script>
