<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'log-in'
})
</script>

<template>
  <section class="max-w-[20rem] mx-auto">
    <h1 class="mb-12 text-xl text-center text-text font-bold">Login to your account</h1>
    <form class="p-6 border border-secondary border-radius rounded">
      <label
        for="login-email"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Email:
        </span>
        <input
          id="login-email"
          type="email"
          name="ipsc-email"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
      </label>

      <label
        for="login-password"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Password:
        </span>
        <input
          id="login-password"
          type="password"
          name="ipsc-password"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
      </label>
      
      <button
        type="submit"
        class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors">
        Login
      </button>
    </form>
  </section>
</template>
