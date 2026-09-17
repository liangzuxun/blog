import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

/**
 * VitePress 主配置
 * - 导航栏 / 侧边栏已抽到 ./config/ 下单独维护
 * - 主题色在 ./theme/custom.css 里改
 * - 想改站点名、描述、页脚，直接改下面对应字段
 */
export default defineConfig({
  lang: 'zh-CN',
  title: 'JoJo',
  description: 'JoJo 的个人技术博客与作品集',

  // 在页面渲染前执行的脚本：默认开启暗色模式
  head: [
    [
      'script',
      {},
      `(function(){try{if(!localStorage.getItem('vitepress-theme-appearance')){document.documentElement.classList.add('dark');}}catch(e){}})();`
    ]
  ],

  // 部署到 GitHub Pages 时如果是 user.github.io/repo 这种子路径，需要改成 '/repo/'
  base: '/',

  // 需要系统装有 git 才能启用；没装 git 时保持 false
  lastUpdated: false,

  themeConfig: {
    siteTitle: 'JoJo',

    // 顶部导航栏（在 ./config/nav.ts 里改）
    nav,

    // 侧边栏（在 ./config/sidebar.ts 里改）
    sidebar,

    // 文章页右侧目录
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 上一篇 / 下一篇文案
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 本地全文搜索（无需后端）
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
                noResultsText: '无法找到相关结果'
              }
            }
          }
        }
      }
    },

    // 右上角社交链接（顶部导航右侧的图标）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 JoJo'
    }
  },

  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    // 代码块一键复制按钮（VitePress 1.x 内置）
    code: {
      copyButton: {
        duration: 2000,
        loc: 'right'
      }
    }
  }
})
