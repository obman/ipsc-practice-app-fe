<script lang="ts">
export default defineComponent({
  props: {
    activeStep: {
      type: Number,
      required: true
    }
  }
})
</script>

<template>
  <div class="ipsc-step-process flex justify-start items-start">
    <SigninProgressBarStep
      :active-step="activeStep"
      step="1"
      label="Definition"/>
    <SigninProgressBarStep
      :active-step="activeStep"
      step="2"
      label="Origins & Destinations"/>
    <SigninProgressBarStep
      :active-step="activeStep"
      step="3"
      label="Performance"/>
    <SigninProgressBarStep
      :active-step="activeStep"
      step="4"
      label="Finish"
      is-last/>
  </div>
</template>

<style scoped>

</style>
