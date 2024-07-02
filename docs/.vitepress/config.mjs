import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/minor-digital-science/',
  title: "Minor Digital Science",
  description: "Information about the Minor Digital Science.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Minor Digital Science',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Teaching', link: '/teaching' },
          { text: 'Minor Digital Science', link: '/minor-digital-science' },
          { text: 'Testimonials', link: '/testimonials' },
        ]
      },
      {
        text: 'FAQ',
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
