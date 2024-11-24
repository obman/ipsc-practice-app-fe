<script>
export default defineComponent({
  props: {
    activeStep: {
      type: Number,
      required: true
    },
    step: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false,
    },
    labelPosition: {
      type: String
    }
  },
  computed: {
    stepNumber() {
      return parseInt(this.step);
    }
  }
});
</script>
<template>
  <div class="ipsc-single-step">
    <div class="circle-and-bar lg:flex lg:justify-start lg:items-center">
      <div class="relative text-center">
        <span
          class="flex justify-center items-center w-10 h-10 mb-8 rounded-full"
          :class="{'bg-primary text-white': activeStep >= stepNumber, 'bg-slate-300 text-content': activeStep < stepNumber}"
        >
          {{ step }}
        </span>
        <strong
          class="ipsc-step-label absolute left-0 bottom-[-25%] w-[11.375rem] text-center translate-gpu"
          :class="{'text-primary': activeStep === stepNumber, 'text-slate-300': activeStep !== stepNumber}">
          {{ label }}
        </strong>
      </div>

      <div
        v-if="!isLast"
        class="process-bar-line flex justify-center items-center w-28 h-2 mr-4 mb-8 ml-4">
        <span
          class="w-1/2 h-full rounded-tl-md rounded-bl-md"
          :class="{'bg-primary': activeStep >= stepNumber, 'bg-slate-300': activeStep < stepNumber}"></span>
        <span
          class="w-1/2 h-full rounded-tr-md rounded-br-md"
          :class="{'bg-primary': activeStep > stepNumber, 'bg-slate-300': activeStep <= stepNumber}"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ipsc-step-label {
  transform: translateX(calc(-50% + (2.5rem / 2)));
}
</style>
