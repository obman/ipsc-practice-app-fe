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
      this.$emit('cycle', {
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
      <UInput
        id="cycles"
        v-model="cycles"
        :min="1"
        size="sm"
        color="text"
        type="number"/>
    </label>

    <label
      for="delay"
      class="flex justify-between flex-col sm:flex-row mb-4 sm:mb-0">
      <span>Start delay (second): </span>
      <UInput
        id="delay"
        v-model="delay"
        :min="0"
        size="sm"
        color="text"
        type="number"/>
    </label>

    <label
      for="delayShots"
      class="flex justify-between flex-col sm:flex-row mb-8">
      <span>Delay between shots (second): </span>
      <UInput
        id="delayShots"
        v-model="delayBetweenShots"
        :min="1"
        size="sm"
        color="text"
        type="number"/>
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

    <UButton
      color="text"
      size="md"
      label="START DRILL"
      @click="onSubmit"/>
  </form>
</template>

<style src="@/assets/css/elements/ipsc-practice-setup-form.css"></style>
