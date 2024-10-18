<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FrontHeader',
})
</script>

<template>
  <header class="ipsc-header flex justify-between items-center p-6 bg-tertiary text-center text-white">
    <div class="logo">
      <NuxtLink to="/">
        <img src="@/static/ipsc-logo.svg" alt="ipsc-logo" class="w-10 h-10">
      </NuxtLink>
    </div>

    <nav class="ipsc-main-navigation flex justify-end items-center gap-x-4">
      <NuxtLink to="/" class="nav-item text-white hover:text-primary">IPSC Practice</NuxtLink>
      <NuxtLink to="/login" class="nav-item text-white hover:text-primary">Login</NuxtLink>
    </nav>
  </header>
</template>

<style src="@/assets/layouts/front-header.css"></style>
