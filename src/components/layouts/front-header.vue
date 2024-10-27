<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'FrontHeader',
  data() {
    return {
      profileMenuOpen: false
    }
  },
  computed: {
    username() {
      if (!this.user || !this.user.username || this.user.username.length === 0) {
        return '';
      }

      return this.user.username
    },
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    profileMenuToggle() {
      this.profileMenuOpen = !this.profileMenuOpen;
    }
  }
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
      <NuxtLink
        v-if="!username"
        to="/login"
        class="nav-item text-white hover:text-primary">
        Log in
      </NuxtLink>
      <NuxtLink
        v-if="!username"
        to="/signin"
        class="nav-item text-white hover:text-primary">
        Sign In
      </NuxtLink>
      <span
      v-if="username"
      class="relative">
        <span
          class="nav-item flex justify-start items-center text-white hover:text-primary cursor-pointer"
          @click="profileMenuToggle">
          <span class="mr-1">Hi, {{ username }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </span>
        <ul
          class="absolute top-14 right-0 p-4 bg-white border border-secondary border-rounded rounded"
          :class="{'hidden': !profileMenuOpen}">
          <li class="text-text hover:text-primary">
            <NuxtLink to="/profile">Profile</NuxtLink>
          </li>
          <li class="text-text hover:text-primary">
            <NuxtLink to="/logout">Logout</NuxtLink>
          </li>
        </ul>
      </span>
    </nav>
  </header>
</template>

<style src="@/assets/layouts/front-header.css"></style>
