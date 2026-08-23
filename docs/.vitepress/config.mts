import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "40 năm",
  description: "Hoi ngo lop C3",
  base: "/40years/",
  head: [ 
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './pbc.png' }]
  ],
  markdown: {
    config(md) {
      md.use(footnote)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/pbc.png',
      dark: '/pbc.jpg'},

    nav: [
      { text: 'Home', link: 'https://pbc86.github.io/' },
    ],

    sidebar: [
      {
        text: 'Những trang ký ức',
        items: [
          { text: 'Những Mùa Gặp Lại', link: '/chanhminh' },
          { text: 'Cảm xúc sau 40 năm ngày họp lớp', link: '/dxt' },
          { text: 'Cảm ơn người nhóm lửa', link: '/nvt' },
          { text: 'Khoe hình', link: '/khoehinh' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pbc86/40years' }
    ]
  }
})
