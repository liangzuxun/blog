<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.url" class="post-item">
      <a :href="post.url" class="post-card">
        <div class="post-meta">
          <time>{{ formatDate(post.frontmatter.date) }}</time>
          <span v-if="post.frontmatter.categories" class="post-cat">
            {{ post.frontmatter.categories }}
          </span>
        </div>
        <h3 class="post-title">{{ post.frontmatter.title }}</h3>
      </a>
    </article>
    <p v-if="list.length === 0" class="empty">暂无文章，快写第一篇吧 ✍️</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { allPosts } from '../usePosts'

const props = defineProps({
  // 传 limit 则只显示前 N 篇；0 表示全部
  limit: { type: Number, default: 0 }
})

const list = computed(() => {
  return props.limit > 0 ? allPosts.slice(0, props.limit) : allPosts
})

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>
