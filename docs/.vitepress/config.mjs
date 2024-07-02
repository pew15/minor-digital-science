import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/minor-digital-science/',
  description: "Information about the Minor Digital Science.",
  themeConfig: {
    siteTitle: false,
    logo: '/logo-uibk.90f7ae9bbfac.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Minor Digital Science',
        items: [
          { text: 'Minor Digital Science', link: '/minor-digital-science' },
          { text: 'Testimonials', link: '/testimonials' },
        ]
      },
      {
        text: 'Information',
        items: [
        { text: 'FAQ Regulation', link: '/faq-regulations' },
        { text: 'FAQ Content', link: '/faq-content' },
        { text: 'FAQ Comparsion', link: '/faq-comparsion' },
        { text: 'Confirmation', link: '/confirmation' },
        { text: 'Minors In List', link: '/minors-in-list' },
        { text: 'Suggested Order', link: '/suggested-order' },
      ]
    }
    ],
  }
})
