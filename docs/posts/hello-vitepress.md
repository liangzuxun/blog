---
title: 从零开始搭建 VitePress 博客
date: 2026-09-10
categories:
  - 建站日记
tags:
  - VitePress
  - 博客
  - 教程
---

欢迎来到我的博客！这是第一篇示例文章，用来演示 VitePress 的各种写作能力。

## 为什么选 VitePress

VitePress 是 Vue 团队出品的静态站点生成器，特点是：

- ⚡️ **极速**：基于 Vite，冷启动和热更新都非常快
- 📝 **Markdown 优先**：专注内容写作，不需要懂太多前端
- 🎨 **默认主题够用**：内置暗黑模式、搜索、代码高亮
- 📦 **可扩展**：支持 Vue 组件、自定义主题、插件

## 写文章就这么简单

新建一个 `.md` 文件，在 frontmatter 里填上标题、日期、分类、标签：

```yaml
---
title: 文章标题
date: 2026-09-10
categories:
  - 分类名
tags:
  - 标签1
  - 标签2
---
```

正文就是普通的 Markdown。

## 代码块高亮

VitePress 内置了 Shiki 语法高亮：

```ts
function greet(name: string): string {
  return `你好，${name}！欢迎来到我的博客。`
}

console.log(greet('世界'))
```

```bash
# 本地启动
npm run docs:dev

# 构建
npm run docs:build
```

## 表格和列表

| 功能 | 是否支持 |
| --- | --- |
| Markdown 写作 | ✅ |
| 暗黑模式 | ✅ |
| 全文搜索 | ✅ |
| 代码复制 | ✅ |

- 第一项
- 第二项
  - 嵌套项
  - 嵌套项
- 第三项

## 下一步

接下来我会陆续记录自己的学习笔记、项目实践。感谢阅读！
