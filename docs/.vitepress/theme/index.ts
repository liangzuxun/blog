import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRoute } from 'vitepress'

import ReadingProgress from './components/ReadingProgress.vue'
import HomeExtra from './components/HomeExtra.vue'
import PostList from './components/PostList.vue'
import Archives from './components/Archives.vue'
import Categories from './components/Categories.vue'
import Tags from './components/Tags.vue'
import ShareButtons from './components/ShareButtons.vue'

import './custom.css'

/**
 * 只在文章页（/posts/ 开头）显示分享按钮
 */
function ShareIfPost() {
  const route = useRoute()
  if (route.path.startsWith('/posts/') && route.path !== '/posts/') {
    return h(ShareButtons)
  }
  return null
}

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress),
      'home-features-after': () => h(HomeExtra),
      'doc-after': () => h(ShareIfPost)
    })
  },

  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('Archives', Archives)
    app.component('Categories', Categories)
    app.component('Tags', Tags)

    // 默认暗色模式（用户没手动选过时）
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vitepress-theme-appearance')
      if (!saved) {
        document.documentElement.classList.add('dark')
      }
    }
  }
}
