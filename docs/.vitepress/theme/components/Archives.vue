<template>
  <div class="archives">
    <div v-for="(items, year) in grouped" :key="year" class="archive-year">
      <h2 class="year-title">{{ year }}</h2>
      <ul class="archive-list">
        <li v-for="post in items" :key="post.url">
          <span class="archive-date">{{ formatDate(post.frontmatter.date) }}</span>
          <a :href="post.url">{{ post.frontmatter.title }}</a>
        </li>
      </ul>
    </div>
    <p v-if="Object.keys(grouped).length === 0" class="empty">暂无归档</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { allPosts } from '../usePosts'

const grouped = computed(() => {
  const map = {}
  for (const post of allPosts) {
    const year = new Date(post.frontmatter.date).getFullYear()
    if (!map[year]) map[year] = []
    map[year].push(post)
  }
  return map
})

function formatDate(d) {
  const dt = new Date(d)
  const m = String(dt.getMonth() + 1).padStart(2, '0')
  const day = String(dt.getDate()).padStart(2, '0')
  return `${m}-${day}`
}
</script>
