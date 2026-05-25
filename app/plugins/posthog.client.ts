import posthogJs from 'posthog-js'

export default defineNuxtPlugin({
  name: 'posthog',
  setup() {
    const config = useRuntimeConfig()

    const posthogClient = posthogJs.init(config.public.posthogKey as string, {
      api_host: config.public.posthogHost as string,
      capture_pageview: false,
      capture_pageleave: true,
      loaded: (ph) => {
        if (import.meta.env.DEV) ph.debug()
      },
    })

    const router = useRouter()
    router.afterEach(() => {
      posthogJs.capture('$pageview', { $current_url: window.location.href })
    })

    return {
      provide: {
        posthog: () => posthogClient,
      },
    }
  },
})
