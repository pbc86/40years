import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PBC 86",
  description: "Hoi ngo lop C3",
  base: "/40years/",
  head: [ 
    ['link', { rel: 'icon', type: 'image/svg+xml', href: './pbc.png' }]
  ],
  markdown: {
    math: true,
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
        // Optional: make the top group collapsible
        // collapsed: false, 
        items: [
          {
            // Submenu
            text: '40 năm',
            // Optional: collapse the submenu by default (true) or open (false)
            collapsed: false, 
            items: [
              { text: 'Những Mùa Gặp Lại', link: '/chanhminh' },
              { text: 'Cảm xúc sau 40 năm ngày họp lớp', link: '/dxt' },
              { text: 'Cảm ơn người nhóm lửa', link: '/nvt' },
              { text: 'Khoe lưng', link: '/khoehinh' },
              { text: 'Tình cờ chẳng hẹn mà nên', link: '/tinhco' },
            ]
          },
          {
            // Submenu
            text: '37 năm',
            // Optional: collapse the submenu by default (true) or open (false)
            collapsed: false, 
            items: [
              { text: 'Bài toán 37 năm', link: '/2022-10-14-toan-do-37-nam' },
              { text: 'Bài toán năm 2023', link: '/2023-09-15-bai-toan-2023' },
              { text: 'Hẹn hò tuổi 60', link: '/2023-05-18-hen-ho-truc-kem' },
            ]
          }
        ]
      }
    ],

    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pbc86/40years' }
    ]
  }
})
