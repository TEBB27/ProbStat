// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { inject } from "@vercel/analytics"
import { onMounted } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    inject();
    onMounted(() => {
      const script = document.createElement('script')
      script.async = true
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5222857214037479"
      script.crossOrigin = "anonymous"
      document.head.appendChild(script)
    })
  }
} satisfies Theme


