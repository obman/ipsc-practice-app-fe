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
          class="nav-item text-white hover:text-primary"
          @click="profileMenuToggle">
          Hi, {{ username }}
        </span>
        <ul
          class="absolute top-8 right-0 p-4 bg-tertiary border border-secondary border-rounded rounded text-text"
          :class="{'hidden': !profileMenuOpen}">
          <li class="text-white hover:text-primary"><NuxtLink to="/profile">Profile</NuxtLink></li>
          <li class="text-white hover:text-primary"><NuxtLink to="/logout">Logout</NuxtLink></li>
        </ul>
      </span>
    </nav>
  </header>
</template>

<style src="@/assets/layouts/front-header.css"></style>
