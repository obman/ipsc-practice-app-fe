<template>
  <main class="container py-24 mx-auto">
    <header class="mb-12">
      <h2 class="text-xl font-bold">Aimbot Drill - Target Acquisition Speed</h2>
      <p>A simple yet effective shooting drill to practice fast target identification/acquisition.</p>
    </header>
    <div class="main-text-content mb-8">
      <p><strong>* Notice :</strong> at this time only <strong>Chrome</strong> browser is supported.</p>
      <p>Application is intended to give support for T.REX ARMS Aimbot Drill. If you don't have buddy to yell the numbers, you can use this application.</p>
      <p>LINK : <a href="https://www.youtube.com/watch?v=Q4wKWsCFAfU" class="text-[#eb9130]" target="_blank"><strong>Aimbot Drill to Increase Target Acquisition Speed</strong></a></p>
    </div>

    <PracticeSetupForm
      @submit="onSubmit"/>
    <div class="p-24">
      <p>Selection : </p>
      {{ practices }}
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import PracticeSetupForm from '~/components/elements/practice-setup-form.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { PracticeSetupForm },
  layout: 'DefaultLayout',
  data() {
    return {
      practices: [],
      sbTest: null
    }
  },
  methods: {
    onSubmit(data) {
      this.practices.push(data);
    }
  },
})
</script>

<style src="@/assets/_base.css"></style>
