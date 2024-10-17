<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FrontHeader',
})
</script>

<template>
  <header class="py-6 bg-[#393839] text-center text-white">
    <h1 class="text-3xl font-bold text-white">IPSC Practice Application</h1>
    <nav>
      <NuxtLink to="/" class="text-[#eb9130] hover:text-white">Home</NuxtLink>
      <NuxtLink to="/login" class="text-[#eb9130] hover:text-white">Login</NuxtLink>
    </nav>
  </header>
</template>

<style src="@/assets/layouts/front-header.css"></style>
