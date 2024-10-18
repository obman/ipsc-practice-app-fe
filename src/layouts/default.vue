<script lang="ts">
import { defineComponent } from 'vue'
import FrontHeader from '~/components/layouts/front-header.vue'
import FrontFooter from '~/components/layouts/front-footer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { FrontFooter, FrontHeader },
  head() {
    return {}
  }
})
</script>

<template>
  <div class="ipsc-practice-app size-full">
    <FrontHeader />
    <main class="ipsc-main max-w-[48rem] p-8 sm:p-12 md:p-24 mx-auto">
      <Nuxt />
    </main>
    <FrontFooter />
  </div>
</template>

<style src="@/assets/_base.css"></style>
