/**
 * 博客文章数据 composable
 * 用 Vite 的 import.meta.glob 在构建时扫描 docs/posts/*.md
 * VitePress 1.x 的 md 模块把 frontmatter 挂在 __pageData 上
 */

const modules = import.meta.glob('../../posts/*.md', { eager: true })

export interface PostItem {
  url: string
  frontmatter: {
    title: string
    date: string
    tags?: string[]
    categories?: string[]
    draft?: boolean
  }
}

function toUrl(path: string): string {
  const file = path.split('/').pop()!.replace(/\.md$/, '')
  if (file === 'index') return '/posts/'
  return `/posts/${file}/`
}

function getFrontmatter(mod: any): any {
  if (!mod) return {}
  // VitePress 1.x: frontmatter 在 __pageData.frontmatter 里
  return mod.__pageData?.frontmatter || mod.frontmatter || {}
}

export const allPosts: PostItem[] = Object.entries(modules)
  .map(([path, mod]: [string, any]) => ({
    url: toUrl(path),
    frontmatter: getFrontmatter(mod)
  }))
  .filter((p) => p.frontmatter.title)
  .filter((p) => !p.frontmatter.draft)
  .filter((p) => p.url !== '/posts/')
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )

export function usePosts() {
  return { allPosts }
}
