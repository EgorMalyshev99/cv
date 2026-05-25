export type AppLocale = 'ru' | 'en'

/**
 * Syncs document lang with active locale. Locale persistence is handled by
 * @nuxtjs/i18n (detectBrowserLanguage cookie). Use setLocale() from useI18n() in UI.
 */
export function useLocale() {
  const { locale } = useI18n()

  useHead({
    htmlAttrs: {
      lang: () => locale.value,
    },
  })
}
