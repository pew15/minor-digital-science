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
          { text: 'Minor Digital Science', link: '/minor-digital-science' },
          { text: 'Testimonials', link: '/testimonials' },
        ]
      },
      {
        text: 'FAQ',
        items: [
        { text: 'faq-regulation', link: '/faq-regulations' },
        { text: 'faq-content', link: '/faq-content' },
        { text: 'faq-comparsion', link: '/faq-comparsion' },
        { text: 'confirmation', link: '/confirmation' },
        { text: 'minors-in-list', link: '/minors-in-list' },
      ]
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
