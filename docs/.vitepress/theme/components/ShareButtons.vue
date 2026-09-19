<template>
  <div class="share-bar">
    <span class="share-label">分享这篇文章：</span>
    <div class="share-buttons">
      <!-- 复制链接 -->
      <button class="share-btn" @click="copyLink" title="复制链接">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        {{ copied ? '已复制' : '复制链接' }}
      </button>

      <!-- 微信（弹二维码） -->
      <button class="share-btn" @click="showWechat = true" title="分享到微信">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89zm-2.19 2.442c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
        </svg>
        微信
      </button>

      <!-- 微博 -->
      <a class="share-btn" :href="weiboUrl" target="_blank" rel="noopener" title="分享到微博">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.1 20.5c-3.9.4-7.2-1.4-7.4-4.1-.3-2.7 2.8-5.2 6.7-5.6 3.9-.4 7.2 1.4 7.4 4.1.3 2.7-2.8 5.2-6.7 5.6zm7.8-8.6c-.3-.1-.5-.2-.4-.6.3-1 .3-1.9 0-2.5-.5-.9-1.9-.9-3.5-.1 0 0-.5.2-.3-.2.3-.6.2-1.2-.2-1.6-.7-.7-2.1 0-3.5 1.1l-.5.4-.3-.1c-.2-.1-.5-.2-.7-.1-.3.1-.4.4-.4.8 0 .3.1.6.3.8l.1.1c-.5.2-1 .5-1.4.9-1.2 1-1.8 2.4-1.7 3.9.1 1.5 1 2.8 2.4 3.6 2.3 1.3 5.5 1.1 7.7-.5 1.1-.8 1.8-1.8 2-2.9.2-.9-.1-1.7-.7-2.1l.4-.1zM19.7 4.9c-1.3-1.5-3.3-2.1-5.1-1.7-.3.1-.5.4-.4.7.1.3.4.5.7.4 1.4-.3 2.9.2 3.9 1.3 1 1.2 1.3 2.8.8 4.2-.1.3.1.7.4.8.3.1.7-.1.8-.4.6-1.8.2-3.7-1.1-5.1z"/>
        </svg>
        微博
      </a>

      <!-- X / Twitter -->
      <a class="share-btn" :href="xUrl" target="_blank" rel="noopener" title="分享到 X">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        X
      </a>

      <!-- LinkedIn -->
      <a class="share-btn" :href="linkedinUrl" target="_blank" rel="noopener" title="分享到 LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
        </svg>
        LinkedIn
      </a>
    </div>

    <!-- 微信二维码弹窗 -->
    <teleport to="body">
      <div v-if="showWechat" class="wechat-mask" @click="showWechat = false">
        <div class="wechat-dialog" @click.stop>
          <h3>微信扫码分享</h3>
          <p>打开微信 → 扫一扫，分享给好友或朋友圈</p>
          <img v-if="qrDataUrl" :src="qrDataUrl" alt="微信分享二维码" class="qr-img" />
          <div v-else class="qr-loading">二维码加载中...</div>
          <button class="close-btn" @click="showWechat = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import QRCode from 'qrcode'

const { page } = useData()
const copied = ref(false)
const showWechat = ref(false)
const qrDataUrl = ref('')

const pageUrl = computed(() => {
  if (typeof window === 'undefined') return ''
  return window.location.href
})

const pageTitle = computed(() => page.value?.frontmatter?.title || page.value?.title || '')

// 本地生成二维码，不依赖外部服务
watch(showWechat, async (open) => {
  if (open && pageUrl.value) {
    try {
      qrDataUrl.value = await QRCode.toDataURL(pageUrl.value, {
        width: 200,
        margin: 2,
        color: { dark: '#000000', light: '#ffffff' }
      })
    } catch (e) {
      qrDataUrl.value = ''
    }
  }
})

const weiboUrl = computed(() =>
  `https://service.weibo.com/share/share.php?url=${encodeURIComponent(pageUrl.value)}&title=${encodeURIComponent(pageTitle.value)}`
)

const xUrl = computed(() =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl.value)}&text=${encodeURIComponent(pageTitle.value)}`
)

const linkedinUrl = computed(() =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`
)

async function copyLink() {
  try {
    await navigator.clipboard.writeText(pageUrl.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    const input = document.createElement('input')
    input.value = pageUrl.value
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  }
}
</script>

<style scoped>
.share-bar {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.share-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.share-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.share-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

/* 微信弹窗 */
.wechat-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.wechat-dialog {
  background: var(--vp-c-bg-elv);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.wechat-dialog h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.wechat-dialog p {
  margin: 0 0 20px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.qr-img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  display: block;
  margin: 0 auto 20px;
}

.qr-loading {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--vp-c-text-3);
  font-size: 14px;
}

.close-btn {
  padding: 8px 24px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.close-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
