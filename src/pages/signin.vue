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
      slideStepClass: 'next'
    }
  },
  computed: {
    activeForm(): any {
      switch(this.activeStep) {
        case 1:
          return resolveComponent('LazySigninFormStep1');
        case 2:
          return resolveComponent('LazySigninFormStep2');
        case 3:
          return resolveComponent('LazySigninFormStep3');
      }
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
    setSlideStepAnimationClass(step: number): void {
      this.slideStepClass = step > this.activeStep ? 'next' : 'back';
    },
    onActiveStep(step: number): void {
      this.setSlideStepAnimationClass(step);
      this.setActiveStep(step);
    },
    onFormChange(form, step: number): void {
      this.setActiveStepForm(this.activeStep, form);
      this.onActiveStep(step);
    },
    async onSubmit(event) {
      event.preventDefault();
      const payload = {
        email: this.step1.email,
        username: this.step1.username,
        first_name: this.step2.firstName,
        last_name: this.step2.lastName,
        password: this.step3.password
      };
      this.fetchRegister(payload);
      console.log (this.step1);
      console.log (this.step2);
      console.log (this.step3);
    },
    ...mapActions(useSigninWizard, ['setActiveStep', 'setActiveStepForm']),
    ...mapActions(useUser, ['fetchRegister'])
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
    <form class="p-6 border border-secondary border-radius rounded">
      <transition :name="`slide-${slideStepClass}`">
        <component
          :is="activeForm"
          :step-form="stepForm"
          :errors-bag="stepErrors"
          @on-back="(form) => onFormChange(form, activeStep - 1)"
          @on-next="(form) => onFormChange(form, activeStep + 1)"></component>
      </transition>

      <div v-if="activeStep === 4">
        <UButton
          icon="i-heroicons-chevron-left-16-solid"
          size="md"
          color="secondary"
          variant="solid"
          label="Back"
          class="w-full mb-2 justify-center cursor-pointer"
          @click="() => {onActiveStep(activeStep - 1); onFormChange(this.stepForm, activeStep) }"/>
        <UButton
          size="md"
          color="secondary"
          variant="solid"
          type="submit"
          label="Create account"
          class="block w-full cursor-pointer"
          @click="onSubmit($event)"/>
      </div>
    </form>
  </div>
</template>

<style scoped>
.slide-next-enter-active,
.slide-back-enter-active,
.slide-next-leave-active,
.slide-back-leave-active {
  transition: all .6s ease;
}

.slide-next-enter-from {
  height: 0;
  opacity: 0;
  transform: translateX(0);
}
.slide-next-leave-to {
  height: 0;
  opacity: 0;
  transform: translateX(-1.5rem);
}

.slide-back-enter-from {
  height: 0;
  opacity: 0;
  transform: translateX(0);
}
.slide-back-leave-to {
  height: 0;
  opacity: 0;
  transform: translateX(1.5rem);
}
</style>
