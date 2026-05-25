export function useSiteUrl() {
  const config = useRuntimeConfig()
  const route = useRoute()

  const baseUrl = computed(() => {
    const siteUrl = String(config.public.siteUrl ?? '').trim()
    if (siteUrl) {
      return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl
    }
    if (import.meta.client) {
      return window.location.origin
    }
    return 'http://localhost:3000'
  })

  const pageUrl = computed(() => `${baseUrl.value}${route.path}`)

  return { baseUrl, pageUrl }
}
