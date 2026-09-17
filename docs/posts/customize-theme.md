---
title: 自定义博客主题：换主色与加组件
date: 2026-09-16
categories:
  - 建站日记
tags:
  - VitePress
  - 主题定制
---

默认主题虽然好用，但每个人都想把博客改成自己喜欢的样子。这篇记录一下怎么改主题色、加自定义组件。

## 改主题色

主题色集中在 `docs/.vitepress/theme/custom.css`，改这几个 CSS 变量即可：

```css
:root {
  --vp-c-brand-1: #6366f1;
  --vp-c-brand-2: #818cf8;
  --vp-c-brand-3: #4f46e5;
}
```

暗色主题在 `.dark` 选择器里单独覆盖。

## 加自定义组件

所有自定义 Vue 组件放在 `docs/.vitepress/theme/components/` 下，然后在 `theme/index.ts` 里注册：

```ts
import MyComponent from './components/MyComponent.vue'

export default {
  // ...
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  }
}
```

之后在任意 Markdown 里直接写 `<MyComponent />` 就能用。

## 注入到默认 Layout

通过插槽往默认主题 Layout 里塞内容：

```ts
Layout() {
  return h(DefaultTheme.Layout, null, {
    'home-features-after': () => h(MyComponent)
  })
}
```

## 总结

VitePress 的主题扩展机制很灵活，想改哪里改哪里，不需要整体推翻重来。
