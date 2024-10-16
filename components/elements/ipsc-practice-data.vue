<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IPSCPracticeData',
  props: {
    practices: {
      type: Array,
      required: true,
    },
  },
})
</script>

<template>
  <div>
    <p>Track your progress:</p>

    <div
      v-for="(practice, index) in practices"
      :key="index"
      class="max-w-[12rem] px-4 py-3 border border-[#333]">
      <p
      v-for="(cycle, _index) in practice"
      :key="_index"
      class="mb-2 border-b border-[#333]">
        <span v-if="cycle[0]">Torso: <span>{{ cycle[0] }}</span></span>
        <span v-if="cycle[1]">Head : <span>{{ cycle[1] }}</span></span>
      </p>
    </div>
  </div>
</template>
