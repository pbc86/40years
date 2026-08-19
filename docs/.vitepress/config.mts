import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PBC 86",
  description: "Hoi ngo lop C3",
  base: "/40years/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/pbc.svg',
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Tac Gia',
        items: [
          { text: 'Nguyen Chanh Minh', link: '/chanhminh' },
          { text: 'Dinh Xuan Truc', link: '/dxt' },
          { text: 'Nguyen Van Tam', link: '/nvt' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
