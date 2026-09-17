import type { DefaultTheme } from 'vitepress'

/**
 * 侧边栏配置
 * 博客文章页（/posts/ 开头）显示一个固定侧边栏，方便导航
 * 其他页面（首页、作品、关于等）默认不显示侧边栏
 */
export const sidebar: DefaultTheme.Sidebar = {
  '/posts/': [
    {
      text: '博客',
      items: [
        { text: '全部文章', link: '/posts/' },
        { text: '归档', link: '/archives' },
        { text: '分类', link: '/categories' },
        { text: '标签', link: '/tags' }
      ]
    }
  ]
}
