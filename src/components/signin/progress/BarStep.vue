<script>
export default defineComponent({
  props: {
    status: {
      type: String,
      default: 'inactive',
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    isLast: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    statusClass() {
      return {
        'bg-primary text-white': this.status === 'active' || this.status === 'completed',
        'bg-slate-300 text-content': this.status === 'inactive'
      }
    },
    labelClass() {
      return {
        'text-primary': this.status === 'active',
        'text-slate-300': this.status === 'inactive' || this.status === 'completed'
      }
    },
    lineClass() {
      return {
        'bg-primary': this.status === 'active' || this.status === 'completed',
        'bg-slate-300': this.status === 'inactive'
      }
    },
    sndLineClass() {
      return {
        'bg-slate-300': this.status === 'active' || this.status === 'inactive',
        'bg-primary': this.status === 'completed'
      }
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
          :class="statusClass"
        >
          {{ step }}
        </span>
        <strong
          class="ipsc-step-label absolute left-0 bottom-[-25%] w-[11.375rem] text-center translate-gpu"
          :class="labelClass">
          {{ label }}
        </strong>
      </div>

      <div
        v-if="!isLast"
        class="process-bar-line flex justify-center items-center w-28 h-2 mr-4 mb-8 ml-4">
        <span
          class="w-1/2 h-full rounded-tl-md rounded-bl-md"
          :class="lineClass"></span>
        <span
          class="w-1/2 h-full rounded-tr-md rounded-br-md"
          :class="sndLineClass"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ipsc-step-label {
  transform: translateX(calc(-50% + (2.5rem / 2)));
}
</style>
