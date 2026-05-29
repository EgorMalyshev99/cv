<template>
  <ClientOnly>
    <UiDrawer v-if="isMobile" direction="bottom">
      <UiDrawerTrigger as-child>
        <slot />
      </UiDrawerTrigger>
      <UiDrawerContent>
        <UiDrawerHeader class="text-left">
          <UiDrawerTitle>{{ t('contact.dialog.title') }}</UiDrawerTitle>
          <UiDrawerDescription>{{ t('contact.dialog.subtitle') }}</UiDrawerDescription>
        </UiDrawerHeader>
        <div class="px-4 pb-6">
          <ContactDialogBody />
        </div>
      </UiDrawerContent>
    </UiDrawer>

    <UiDialog v-else>
      <UiDialogTrigger as-child>
        <slot />
      </UiDialogTrigger>
      <UiDialogContent class="sm:max-w-md">
        <UiDialogHeader>
          <UiDialogTitle>{{ t('contact.dialog.title') }}</UiDialogTitle>
          <UiDialogDescription>{{ t('contact.dialog.subtitle') }}</UiDialogDescription>
        </UiDialogHeader>
        <ContactDialogBody />
      </UiDialogContent>
    </UiDialog>

    <template #fallback>
      <slot />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { isSm } = useScreen()

const isMobile = computed(() => !isSm.value)
</script>
