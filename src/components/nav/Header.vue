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
    ...mapActions(useUser, ['isUserLoggedIn', 'userLogout'])
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
        md:right-[-50vw] md:w-1/2
        lg:static lg:flex lg:justify-end lg:items-center lg:gap-x-4 lg:w-auto lg:h-auto lg:bg-transparent"
        :class="{'translate-x-[-100vw] transform-gpu z-9 xs:translate-x-[-75vw] md:translate-x-[-50vw]': isOpen}">
        <UButton
          icon="i-iconamoon-close-bold"
          color="tertiary"
          variant="link"
          class="mb-2 lg:hidden"
          @click="toggleMenu"/>
        <nav class="ipsc-main-navigation flex flex-col justify-end py-2 border-t border-t-tertiary-300 border-b border-b-tertiary-300
          lg:flex-row lg:items-center lg:gap-x-4 lg:border-t-0 lg:border-b-0">
          <NuxtLink
            to="/"
            class="nav-item mb-2 text-content hover:text-primary lg:inline lg:mb-0 lg:text-white">
            {{ $t('main_menu.home') }}
          </NuxtLink>
          <NuxtLink
            v-if="!username"
            to="/login"
            class="nav-item mb-2 text-content hover:text-primary lg:inline lg:mb-0 lg:text-white">
            {{ $t('main_menu.login') }}
          </NuxtLink>
          <NuxtLink
            v-if="!username"
            to="/signin"
            class="nav-item mb-2 text-content hover:text-primary lg:inline lg:mb-0 lg:text-white">
            {{ $t('main_menu.signin') }}
          </NuxtLink>
          <span
            v-if="username"
            class="block lg:relative">
            <span
              class="nav-item flex justify-end items-center text-content hover:text-primary lg:justify-start cursor-pointer lg:text-white"
              @click="profileMenuToggle">
              <span class="mr-1">
                {{ $t('main_menu.user_profile', username) }}
              </span>
              <UButton
                icon="i-iconamoon-arrow-down-2"
                color="tertiary"
                variant="link"/>
            </span>
            <ul
              class="block lg:absolute lg:top-14 lg:right-0 lg:p-4 lg:bg-white lg:border lg:border-secondary lg:border-rounded rounded"
              :class="{'hidden': !profileMenuOpen}">
              <li class="text-content hover:text-primary">
                <NuxtLink to="/profile">
                  {{ $t('main_menu.profile') }}
                </NuxtLink>
              </li>
              <li class="text-content hover:text-primary">
                <span
                  class="cursor-pointer"
                  @click="userLogout">
                  {{ $t('main_menu.logout') }}
                </span>
              </li>
            </ul>
          </span>
        </nav>
      </div>
      <UButton
        icon="i-iconamoon-menu-burger-horizontal-bold"
        color="primary"
        variant="outline"
        class="lg:hidden"
        @click="toggleMenu"/>
    </div>
  </header>
</template>
