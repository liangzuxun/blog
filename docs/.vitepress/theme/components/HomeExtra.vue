<template>
  <div class="home-extra">
    <!-- 最新文章 -->
    <section class="home-section">
      <h2 class="home-section-title">最新文章</h2>
      <PostList :limit="5" />
    </section>

    <!-- 精选作品 -->
    <section class="home-section">
      <h2 class="home-section-title">精选作品</h2>
      <div class="project-grid">
        <div v-for="p in projects" :key="p.name" class="project-card">
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
          <div class="tech-tags">
            <span v-for="t in p.tags" :key="t" class="tech-tag">{{ t }}</span>
          </div>
          <a :href="p.link" target="_blank" rel="noopener">查看项目 →</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PostList from './PostList.vue'

// 精选作品占位，以后直接改这里或改成从 projects 页面读取
const projects = [
  {
    name: '项目一',
    desc: '一个示例项目的简短介绍，说明它解决了什么问题、你在其中做了什么。',
    tags: ['Vue', 'Vite'],
    link: 'https://github.com/yourname/project-one'
  },
  {
    name: '项目二',
    desc: '一个示例项目的简短介绍，说明它解决了什么问题、你在其中做了什么。',
    tags: ['Node.js', 'TypeScript'],
    link: 'https://github.com/yourname/project-two'
  },
  {
    name: '项目三',
    desc: '一个示例项目的简短介绍，说明它解决了什么问题、你在其中做了什么。',
    tags: ['React', 'CSS'],
    link: 'https://github.com/yourname/project-three'
  }
]
</script>
