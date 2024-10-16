<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PracticeSetupForm',
  data() {
    return {
      cycles: 1,
      delay: 1,
      delayBetweenShots: 1
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', {
        trainCycles: this.cycles,
        startDelay: this.delay,
        delayBetweenShots: this.delayBetweenShots
      });
    }
  }
})
</script>

<template>
  <form
    class="w-96 mx-auto"
    @submit.prevent="onSubmit">
    <label
      for="cycles"
      class="flex justify-between">
      <span>Number of Cycles: </span>
      <input
        id="cycles"
        v-model="cycles"
        type="number"
        class="border border-gray-300 rounded px-2 py-1">
    </label>

    <label
      for="delay"
      class="flex justify-between">
      <span>Start delay (second): </span>
      <input
        id="delay"
        v-model="delay"
        type="number"
        class="border border-gray-300 rounded px-2 py-1">
    </label>

    <label
      for="delayShots"
      class="flex justify-between">
      <span>Delay between shots (second): </span>
      <input
        id="delayShots"
        v-model="delayBetweenShots"
        type="number"
        class="border border-gray-300 rounded px-2 py-1">
    </label>

    <button
      type="submit"
      @submit="onSubmit">Submit</button>
  </form>
</template>
