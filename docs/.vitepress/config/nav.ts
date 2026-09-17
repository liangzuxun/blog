import type { DefaultTheme } from 'vitepress'

/**
 * 顶部导航栏配置
 * 想加 / 删 / 改菜单项，直接改这里即可
 */
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/posts/' },
  { text: '归档', link: '/archives' },
  { text: '分类', link: '/categories' },
  { text: '标签', link: '/tags' },
  { text: '作品', link: '/projects' },
  { text: '关于', link: '/about' }
]
