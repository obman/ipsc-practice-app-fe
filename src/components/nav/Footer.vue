<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FrontFooter'
})
</script>

<template>
  <footer class="flex justify-between items-center flex-col sm:flex-row py-16 px-6 bg-secondary text-center text-white">
    <p class="text-lg mb-8 sm:mb-0">
      <span class="copy font-light">©</span>
      <span class="year">{{ new Date().getFullYear() }}</span>
      <strong>IPSC Practice</strong>
    </p>

    <NuxtLink
      to="/"
      class="mb-8 sm:mb-0">
      <img
        src="@/public/ipsc-logo.svg"
        alt="ipsc-logo"
        class="w-[6rem] h-[6rem]">
    </NuxtLink>

    <div class="flex justify-end items-center gap-x-8">
      <NuxtLink to="https://www.youtube.com/results?search_query=aimbot+drill+rifle" class="icon-link" target="_blank">
        <img
          src="@/public/youtube-svgrepo-com-white.svg"
          alt="Aimbot drill on YouTube"
          class="w-6 h-6">
      </NuxtLink>
      <NuxtLink to="/" class="icon-link" target="_blank">
        <img
          src="@/public/instagram-svgrepo-com-white.svg"
          alt="Aimbot drill on Instagram"
          class="w-6 h-6">
      </NuxtLink>
    </div>
  </footer>
</template>
