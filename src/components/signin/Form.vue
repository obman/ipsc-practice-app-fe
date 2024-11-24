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
    ...mapState(useSigninWizard, ['activeStep', 'activeStepForm', 'activeStepErrors']),
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
  <form class="p-6 border border-secondary border-radius rounded">
    <transition :name="`slide-${slideStepClass}`">
      <SigninFunctionalStepForm
        :active-step="activeStep"
        :step-form="activeStepForm"
        :error-bags="activeStepErrors"
        @on-back="(form) => onFormChange(form, activeStep - 1)"
        @on-next="(form) => onFormChange(form, activeStep + 1)">
        <LazySigninFormStep1 slot="step1" v-bind="$props" />
        <LazySigninFormStep2 slot="step2" v-bind="$props" />
        <LazySigninFormStep3 slot="step3" v-bind="$props" />
      </SigninFunctionalStepForm>
    </transition>
    <!--<transition :name="`slide-${slideStepClass}`">
      <component
        :is="activeForm"
        :step-form="activeStepForm"
        :errors-bag="activeStepErrors"
        @on-back="(form) => onFormChange(form, activeStep - 1)"
        @on-next="(form) => onFormChange(form, activeStep + 1)" />
    </transition>-->

    <div v-if="activeStep === 4">
      <UButton
        icon="i-heroicons-chevron-left-16-solid"
        size="md"
        color="secondary"
        variant="solid"
        label="Back"
        class="w-full mb-2 justify-center cursor-pointer"
        @click="() => {onActiveStep(activeStep - 1); onFormChange(activeStepForm, activeStep) }"/>
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
</template>

<style src="@/assets/css/elements/sign-form.css" scoped></style>
