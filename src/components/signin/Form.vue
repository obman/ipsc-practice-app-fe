<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useRegistration } from '~/stores/registration'

export default defineComponent({
  data() {
    return {
      steps: [0, 1, 2, 3],
      step: 0,
      slideStepClass: 'next'
    }
  },
  computed: {
    activeStep(): Number {
      return this.step;
    },
    ...mapState(useRegistration, ['registrationData']),
  },
  methods: {
    setActiveStep(step: number) {
      this.step = step;
    },
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
    onBack(): void {
      if (this.activeStep === 0) {
        // open modal to ask confirmation that if user goes on step 0 all data is reset
      }

      this.onActiveStep(this.activeStep - 1);
    },
    onNext(): void {
      // which step form is active
      // how to access refs dynamically
      const validated = this.$refs.step.validateForm();
      if (validated) {
        this.onActiveStep(this.activeStep + 1);
      }
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
      //this.fetchRegister(payload);
      console.log (this.step1);
      console.log (this.step2);
      console.log (this.step3);
      console.log (payload);
    },
    ...mapActions(useRegistration, ['setActiveStepForm']),
    ...mapActions(useUser, ['fetchRegister'])
  }
})
</script>

<template>
  <div>
    <div class="flex justify-center items-center mb-12">
      <SigninProgressBar
        :steps="steps"
        :active-step="activeStep"/>
    </div>

    <form class="max-w-[20rem] p-6 mx-auto mb-8 border border-secondary border-radius rounded">
      <transition :name="`slide-${slideStepClass}`">
        <SigninDynamicStep
          :active-step="activeStep"
          :data="registrationData"
        >
          <LazySigninFormStep1 slot="step1" ref="step" v-bind="$props" />
          <LazySigninFormStep2 slot="step2" ref="step" v-bind="$props" />
          <LazySigninFormStep3 slot="step3" ref="step" v-bind="$props" />
          <LazySigninFormStep4 slot="step4" ref="step" v-bind="$props" />
        </SigninDynamicStep>
      </transition>
    </form>
    <UButtonGroup
      size="md"
      class="justify-center w-full">
      <UButton
        v-if="activeStep > 0"
        icon="i-heroicons-chevron-left-16-solid"
        color="secondary"
        label="Back"
        class="mr-1"
        @click="onBack"/>
      <UButton
        icon="i-heroicons-chevron-right-16-solid"
        color="secondary"
        label="Next"
        class="ml-1 cursor-pointer"
        trailing
        @click="onNext"/>
    </UButtonGroup>
  </div>
</template>

<style src="@/assets/css/elements/sign-form.css" scoped></style>
