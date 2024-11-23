<script lang="ts">
import { mapActions, mapState } from 'pinia';

export default defineComponent({
  data() {
    return {
      errors: {
        username: '',
        email: '',
        password: '',
        rePassword: '',
      },
    }
  },
  computed: {
    activeForm(): string {
      switch(this.activeStep) {
        case 1:
          return resolveComponent('LazySigninFormStep1');
        case 2:
          return resolveComponent('LazySigninFormStep2');
        case 3:
          return resolveComponent('LazySigninFormStep3');
      }
      return resolveComponent(this.stepComponents[this.activeStep]);
    },
    stepForm(): object {
      switch(this.activeStep) {
        case 1:
          return this.step1;
        case 2:
          return this.step2;
        case 3:
          return this.step3;
      }
    },
    stepErrors(): object {
      switch(this.activeStep) {
        case 1:
          return this.errorsStep1;
        case 2:
          return this.errorsStep2;
        case 3:
          return this.errorsStep3;
      }
    },
    ...mapState(useSigninWizard, ['step1', 'step2', 'step3', 'activeStep', 'errorsStep1', 'errorsStep2', 'errorsStep3']),
  },
  methods: {
    async createUser() {
      console.log (this.step1);
      console.log (this.step2);
      console.log (this.step3);
    },
    ...mapActions(useSigninWizard, ['setActiveStep', 'setStep1Form', 'setStep2Form', 'setStep3Form'])
  }
})
</script>

<template>
  <section class="max-w-[20rem] mx-auto">
    <h1 class="mb-12 text-xl text-center text-text font-bold">Create your account</h1>
    <div class="my-8">
      <p class="mb-4">Some info before you sign in:</p>
      <SigninStepInfo>
        <ul class="list-disc">
          <li><u>Username must be longer than 3 characters</u></li>
          <li><u>Password must be longer than 6 characters</u></li>
        </ul>
      </SigninStepInfo>
    </div>
    <div
      class="p-6 border border-secondary border-radius rounded">
      <transition name="slide">
        <component
          :is="activeForm"
          :step-form="stepForm"
          :errors-bag="stepErrors"
          @step-form="(form) => setStep1Form(form)"
          @active-step="(step) => setActiveStep(step)"></component>
      </transition>

      <UButton
        v-if="activeStep === 4"
        size="md"
        color="text"
        type="submit"
        label="Finish"
        @click="createUser"/>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all .6s ease;
}

.slide-enter-from {
  height: 0;
  opacity: 0;
  transform: translateX(100%);
}
.slide-leave-to {
  height: 0;
  opacity: 0;
  transform: translateX(-100%);
}
</style>
