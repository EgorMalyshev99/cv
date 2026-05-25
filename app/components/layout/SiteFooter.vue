<template>
  <footer class="border-border relative z-10 border-t py-8">
    <div
      class="text-muted-foreground container flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between"
    >
      <p>© {{ year }} — {{ t('footer.rights') }}</p>
      <div class="flex items-center gap-1">
        <a
          v-for="link in SOCIAL_LINKS"
          :key="link.key"
          :href="link.href"
          :aria-label="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-foreground rounded-md p-1.5 transition-colors"
        >
          <PhGithubLogo v-if="link.key === 'github'" :size="18" />
          <PhTelegramLogo v-else-if="link.key === 'telegram'" :size="18" />
          <PhLinkedinLogo v-else-if="link.key === 'linkedin'" :size="18" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PhGithubLogo, PhLinkedinLogo, PhTelegramLogo } from '@phosphor-icons/vue'
import { SOCIAL_LINKS } from '@/config/site'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
