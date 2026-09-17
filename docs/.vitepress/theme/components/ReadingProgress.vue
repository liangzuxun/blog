<template>
  <div class="reading-progress" :style="{ width: progress + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const progress = ref(0)
const route = useRoute()

function update() {
  const el = document.documentElement
  const total = el.scrollHeight - el.clientHeight
  progress.value = total > 0 ? (el.scrollTop / total) * 100 : 0
}

// 路由切换后重新计算
watch(() => route.path, () => {
  setTimeout(update, 100)
})

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', update)
})
</script>
