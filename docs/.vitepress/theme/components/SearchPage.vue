<template>
  <div class="search-page">
    <h1 class="search-title">搜索文章</h1>
    <input
      v-model="keyword"
      type="text"
      placeholder="输入关键词，按标题搜索..."
      class="search-input"
      autofocus
    />
    <p v-if="keyword" class="search-count">找到 {{ filtered.length }} 篇文章</p>

    <div class="post-list" v-if="filtered.length">
      <article v-for="post in filtered" :key="post.url" class="post-item">
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
    </div>

    <p v-else-if="keyword" class="empty">没有找到匹配的文章</p>
    <p v-else class="empty">输入关键词开始搜索</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allPosts } from '../usePosts'

const keyword = ref('')

const filtered = computed(() => {
  if (!keyword.value.trim()) return []
  const kw = keyword.value.trim().toLowerCase()
  return allPosts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(kw)
  )
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

<style scoped>
.search-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 0;
}

.search-title {
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 24px;
}

.search-input {
  width: 100%;
  padding: 14px 20px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-count {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 16px 0 8px;
}

.empty {
  color: var(--vp-c-text-3);
  text-align: center;
  padding: 48px 0;
}
</style>
