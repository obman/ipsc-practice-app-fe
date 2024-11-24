<script lang="ts">
import { mapState } from 'pinia';

export default defineComponent({
  data() {
    return {
      slideStepClass: 'next'
    }
  },
  computed: {
    ...mapState(useSigninWizard, ['activeStep'])
  },
  methods: {
    setSlideStepAnimationClass(step: number): void {
      this.slideStepClass = step > this.activeStep ? 'next' : 'back';
    },
  }
})
</script>

<template>
  <div class="max-w-[20rem] mx-auto">
    <h1 class="mb-12 text-xl text-center text-text font-bold">Create your account</h1>
    <div
      v-if="activeStep !== 4"
      class="my-8">
      <p class="mb-4">Some info before you sign in:</p>
      <ul class="list-disc">
        <li><u>Username must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>First name must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>Last name must be longer than 3 characters and not longer than 20 characters.</u></li>
        <li><u>Password must be longer than 6 characters.</u></li>
      </ul>
    </div>
    <div v-if="activeStep === 4">
      <p class="mb-4">Review your account details: </p>
      <div class="singin-data">
        <div class="mb-4">
          <p>Email: {{ step1.email }}</p>
          <p>Username: {{ step1.username }}</p>
        </div>
        <div class="flex justify-between items-center mb-4">
          <p>First Name: {{ step2.firstName }}</p>
          <p>Last Name: {{ step2.lastName }}</p>
        </div>
      </div>
    </div>
    <SigninForm />
  </div>
</template>
