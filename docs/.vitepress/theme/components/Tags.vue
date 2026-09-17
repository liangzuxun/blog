<template>
  <div>
    <div class="tag-cloud">
      <a
        v-for="(posts, name) in grouped"
        :key="name"
        class="tag-item"
        :href="`/tags/#${encodeURIComponent(name)}`"
      >
        # {{ name }}
        <span class="tag-count">{{ posts.length }}</span>
      </a>
    </div>

    <div
      v-for="(items, name) in grouped"
      :key="name"
      class="archive-year"
      :id="encodeURIComponent(name)"
    >
      <h2 class="year-title"># {{ name }}</h2>
      <ul class="archive-list">
        <li v-for="post in items" :key="post.url">
          <span class="archive-date">{{ formatDate(post.frontmatter.date) }}</span>
          <a :href="post.url">{{ post.frontmatter.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { allPosts } from '../usePosts'

const grouped = computed(() => {
  const map = {}
  for (const post of allPosts) {
    const tags = post.frontmatter.tags
    if (!tags) continue
    for (const t of tags) {
      if (!map[t]) map[t] = []
      map[t].push(post)
    }
  }
  return map
})

function formatDate(d) {
  const dt = new Date(d)
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
}
</script>
