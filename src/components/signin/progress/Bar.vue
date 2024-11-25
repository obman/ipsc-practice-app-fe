<script lang="ts">
export default defineComponent({
  props: {
    steps: {
      type: Array,
      required: true
    },
    activeStep: {
      type: Number,
      required: true
    }
  },
})
</script>

<template>
  <div class="ipsc-step-process flex justify-start items-start">
    <SigninProgressBarStep
      v-for="(step, index) in steps"
      :step="step"
      :status="activeStep === step ? 'active' : step < activeStep ? 'completed' : 'inactive'"
      :label="$t(`signin.progress_bar.step${step}`)"
      :is-last="step === steps.length - 1"/>
  </div>
</template>

<style scoped>

</style>
