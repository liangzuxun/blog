# 个人技术博客 + 作品集（VitePress）

基于 [VitePress](https://vitepress.dev) 构建的纯静态个人博客，支持 Markdown 写作、归档、分类、标签、本地搜索、暗黑模式、阅读进度条。

---

## 一、本地启动

环境要求：Node.js 18+（推荐 20+）。

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:5173）
npm run docs:dev

# 构建生产版本（输出到 docs/.vitepress/dist）
npm run docs:build

# 本地预览构建结果
npm run docs:preview
```

---

## 二、目录结构

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts              # 主配置（站点名、搜索、页脚等）
│   │   ├── config/
│   │   │   ├── nav.ts             # 顶部导航栏
│   │   │   └── sidebar.ts         # 侧边栏
│   │   ├── theme/
│   │   │   ├── index.ts           # 主题入口
│   │   │   ├── custom.css         # 全局样式 + 主题色（改色在这里）
│   │   │   ├── components/         # 自定义 Vue 组件
│   │   │   │   ├── ReadingProgress.vue   # 阅读进度条
│   │   │   │   ├── PostList.vue          # 文章列表
│   │   │   │   ├── HomeExtra.vue         # 首页：最新文章+精选作品
│   │   │   │   ├── Archives.vue          # 归档页
│   │   │   │   ├── Categories.vue        # 分类页
│   │   │   │   └── Tags.vue              # 标签页
│   │   │   └── data/
│   │   │       └── posts.ts              # 文章数据加载器（自动扫描 posts/*.md）
│   │   └── cache/                 # 构建缓存（自动生成，忽略即可）
│   ├── posts/
│   │   ├── index.md               # 博客列表页
│   │   ├── hello-vitepress.md     # 示例文章 1
│   │   ├── markdown-guide.md      # 示例文章 2
│   │   └── customize-theme.md     # 示例文章 3
│   ├── index.md                   # 首页
│   ├── about.md                   # 关于我
│   ├── projects.md                # 作品集
│   ├── archives.md                # 归档
│   ├── categories.md              # 分类
│   ├── tags.md                    # 标签
│   ├── links.md                   # 友链
│   └── 404.md                     # 404 页
├── package.json
└── README.md
```

---

## 三、如何新增一篇文章

1. 在 `docs/posts/` 下新建一个 `.md` 文件，例如 `2026-10-01-my-new-post.md`
2. 文件开头写 frontmatter：

   ```yaml
   ---
   title: 文章标题
   date: 2026-10-01
   categories:
     - 分类名
   tags:
     - 标签1
     - 标签2
   ---
   ```

3. 正文写 Markdown，保存即可。文章列表、归档、分类、标签页会**自动更新**，无需手动改任何配置。

> 想让某篇文章不发布但又想留着草稿，加一行 `draft: true` 即可。

---

## 四、如何新增一个页面

1. 在 `docs/` 下新建一个 `.md` 文件，例如 `docs/notes.md`
2. 在 `docs/.vitepress/config/nav.ts` 的 `nav` 数组里加一项：

   ```ts
   { text: '笔记', link: '/notes' }
   ```

3. 保存后，导航栏就会出现「笔记」入口。

---

## 五、如何改配色

打开 `docs/.vitepress/theme/custom.css`，修改 `:root` 里的这几个变量：

```css
:root {
  --vp-c-brand-1: #6366f1;  /* 主色 */
  --vp-c-brand-2: #818cf8;  /* hover 浅色 */
  --vp-c-brand-3: #4f46e5;  /* 深色 */
}
```

暗色主题改 `.dark {}` 块里的同名变量。

---

## 六、如何替换个人信息

| 改什么 | 改哪里 |
| --- | --- |
| 站点名 / 标题 | `docs/.vitepress/config.ts` 的 `title` 和 `themeConfig.siteTitle` |
| 头像 / 一句话简介 | `docs/index.md` 的 `hero` 部分 |
| 关于我内容 | `docs/about.md` |
| 作品集项目 | `docs/projects.md` 和 `docs/.vitepress/theme/components/HomeExtra.vue` |
| GitHub 链接 | `docs/.vitepress/config.ts` 的 `socialLinks` |
| 页脚版权 | `docs/.vitepress/config.ts` 的 `footer` |

---

## 七、部署

### 方案 A：Vercel（最简单，推荐）

1. 把项目推到 GitHub 仓库
2. 在 Vercel 导入该仓库
3. 构建命令填 `npm run docs:build`，输出目录填 `docs/.vitepress/dist`
4. 部署完成，绑定自定义域名即可

### 方案 B：GitHub Pages

1. 在 `docs/.vitepress/config.ts` 里把 `base` 改成你的仓库名，例如 `'/blog/'`
2. 项目根目录新建 `.github/workflows/deploy.yml`，使用 VitePress 官方提供的 GitHub Actions 工作流（见 https://vitepress.dev/guide/deploy#github-pages）
3. 推送代码后自动部署

---

## 八、后期想加新功能？

直接跟我说：「我要给我的 VitePress 博客加 XXX」，我会给你**增量的文件/片段**，不需要你把整个项目丢过来。
