<script lang="ts">
import { defineComponent } from 'vue'
import FrontHeader from '~/components/layouts/front-header.vue'
import FrontFooter from '~/components/layouts/front-footer.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { FrontFooter, FrontHeader },
})
</script>

<template>
  <div class="ipsc-practice-app size-full">
    <FrontHeader />
    <Nuxt />
    <FrontFooter />
  </div>
</template>
