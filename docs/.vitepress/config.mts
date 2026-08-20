import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PBC 86",
  description: "Hoi ngo lop C3",
  base: "/40years/",
  head: [ 
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './public/pbc.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/pbc.svg',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Những trang ký ức',
        items: [
          { text: 'Nguyễn Chánh Minh', link: '/chanhminh' },
          { text: 'Đinh Xuân Trực', link: '/dxt' },
          { text: 'Nguyễn Văn Tâm', link: '/nvt' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pbc86/40years' }
    ]
  }
})
