<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IPSCPracticeSetupForm',
  data() {
    return {
      cycles: 1,
      delay: 0,
      delayBetweenShots: 1,
      targetsNumber: 1
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', {
        cycles: this.cycles,
        delay: this.delay,
        delayBetweenShots: this.delayBetweenShots,
        targetsNumber: this.targetsNumber
      });
    }
  }
})
</script>

<template>
  <form
    class="ipsc-practice-setup-form max-w-[40rem] mx-auto"
    @submit.prevent="onSubmit">
    <label
      for="cycles"
      class="flex justify-between flex-col sm:flex-row mb-4 sm:mb-0">
      <span>Number of Cycles: </span>
      <input
        id="cycles"
        v-model="cycles"
        type="number"
        :min="1"
        class="border border-text rounded px-2 py-1">
    </label>

    <label
      for="delay"
      class="flex justify-between flex-col sm:flex-row mb-4 sm:mb-0">
      <span>Start delay (second): </span>
      <input
        id="delay"
        v-model="delay"
        type="number"
        :min="0"
        class="border border-text rounded px-2 py-1">
    </label>

    <label
      for="delayShots"
      class="flex justify-between flex-col sm:flex-row mb-8">
      <span>Delay between shots (second): </span>
      <input
        id="delayShots"
        v-model="delayBetweenShots"
        type="number"
        :min="1"
        class="border border-text rounded px-2 py-1">
    </label>

    <label
      for="range-slider"
      class="flex justify-between flex-col mb-5 sm:max-w-[40rem] sm:flex-row">
      <span>How many targets will be used?</span><br>
      <span
      class="flex justify-between items-center">
        <span
          class="w-6 text-center">1</span>
        <input
          id="range-slider"
          v-model="targetsNumber"
          type="range"
          class="range-slider"
          min="1"
          max="20">
        <span
          class="w-6 text-center">20</span>
      </span>
    </label>
    <p class="flex justify-end mb-6">Targets selected : {{ targetsNumber }}</p>

    <button
      type="submit"
      class="px-2 py-1 mt-4 border border-text rounded text-text hover:bg-text hover:text-white"
      @submit="onSubmit">START DRILL</button>
  </form>
</template>

<style src="~/assets/elements/ipsc-practice-setup-form.css"></style>
