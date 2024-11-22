<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia'
import { useUser } from '@/stores/user'

export default defineComponent({
  data() {
    return {
      profileMenuOpen: false,
      isOpen: false
    }
  },
  mounted() {
    let user = this.isUserLoggedIn();
    if (user) {
      // redirect to home - probably to dashboard in the future
      this.$router.push({ name: 'index' });
    }
  },
  computed: {
    username() {
      if (!this.userItem) {
        return '';
      }

      if (!this.userItem.username || this.userItem.username.length === 0) {
        return '';
      }

      return this.userItem.username
    },
    ...mapState(useUser, ['userItem']),
  },
  methods: {
    profileMenuToggle() {
      this.profileMenuOpen = !this.profileMenuOpen;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    ...mapActions(useUser, ['isUserLoggedIn'])
  }
})
</script>

<template>
  <header class="ipsc-header p-6 bg-tertiary">
    <div class="flex justify-between items-center container mx-auto">
      <NuxtLink
        to="/"
        class="">
        <img src="@/public/ipsc-logo.svg" alt="ipsc-logo" class="w-10 h-10">
      </NuxtLink>

      <div
        class="ipsc-nav-wrapper fixed top-0 right-[-100vw] w-full h-screen py-2 px-4 bg-white transition-all duration-300 ease-in-out text-right
        xs:right-[-75vw] xs:w-3/4
        sm:right-[-50vw] sm:w-1-/2
        md:static md:flex md:justify-end md:items-center md:gap-x-4 md:w-auto md:h-auto md:bg-transparent"
        :class="{'translate-x-[-100vw] transform-gpu z-9 xs:translate-x-[-75vw] sm:translate-x-[-50vw]': isOpen}">
        <UButton
          icon="i-iconamoon-close-bold"
          color="tertiary"
          variant="link"
          class="mb-2 md:hidden"
          @click="toggleMenu"/>
        <nav class="ipsc-main-navigation flex flex-col justify-end py-2 border-t border-t-tertiary-300 border-b border-b-tertiary-300
          md:flex-row md:items-center md:gap-x-4 md:border-t-0 md:border-b-0">
          <NuxtLink
            to="/"
            class="nav-item mb-2 text-content hover:text-primary md:inline md:mb-0 md:text-white">
            IPSC Practice
          </NuxtLink>
          <NuxtLink
            v-if="!username"
            to="/login"
            class="nav-item mb-2 text-content hover:text-primary md:inline md:mb-0 md:text-white">
            Log in
          </NuxtLink>
          <NuxtLink
            v-if="!username"
            to="/signin"
            class="nav-item mb-2 text-content hover:text-primary md:inline md:mb-0 md:text-white">
            Sign In
          </NuxtLink>
          <span
            v-if="username"
            class="block md:relative">
            <span
              class="nav-item flex justify-end items-center text-content hover:text-primary md:justify-start cursor-pointer md:text-white"
              @click="profileMenuToggle">
              <span class="mr-1">Hi, {{ username }}</span>
              <UButton
                icon="i-iconamoon-arrow-down-2"
                color="tertiary"
                variant="link"/>
            </span>
            <ul
              class="block md:absolute md:top-14 md:right-0 md:p-4 md:bg-white md:border md:border-secondary md:border-rounded rounded"
              :class="{'hidden': !profileMenuOpen}">
              <li class="text-content hover:text-primary">
                <NuxtLink to="/profile">Profile</NuxtLink>
              </li>
              <li class="text-content hover:text-primary">
                <NuxtLink to="/logout">Logout</NuxtLink>
              </li>
            </ul>
          </span>
        </nav>
      </div>
      <UButton
        icon="i-iconamoon-menu-burger-horizontal-bold"
        color="primary"
        variant="outline"
        class="md:hidden"
        @click="toggleMenu"/>
    </div>
  </header>
</template>
