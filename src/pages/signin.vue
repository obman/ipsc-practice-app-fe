<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useSigninWizard } from '@/stores/signinWizard';
import SignFormStep1 from '~/components/elements/sign-form-step1.vue';
import SignFormStep2 from '~/components/elements/sign-form-step2.vue';
import SignFormStep3 from '~/components/elements/sign-form-step3.vue';

export default defineComponent({
  name: "SignInPage",
  components: { SignFormStep1, SignFormStep2, SignFormStep3 },
  layout: 'default',
  data() {
    return {
      errors: {
        username: '',
        email: '',
        password: '',
        rePassword: '',
      }
    }
  },
  computed: {
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
      <ul class="list-disc">
        <li><u>Username must be longer than 3 characters</u></li>
        <li><u>Password must be longer than 6 characters</u></li>
      </ul>
    </div>
    <div
      class="p-6 border border-secondary border-radius rounded">
      <SignFormStep1
        v-if="activeStep === 1"
        :step-form="step1"
        :errors-bag="errorsStep1"
        @step-form="(form) => setStep1Form(form)"
        @active-step="(step) => setActiveStep(step)"/>

      <SignFormStep2
        v-if="activeStep === 2"
        :step-form="step2"
        :errors-bag="errorsStep2"
        @step-form="(form) => setStep2Form(form)"
        @active-step="(step) => setActiveStep(step)"/>

      <SignFormStep3
        v-if="activeStep === 3"
        :step-form="step3"
        :errors-bag="errorsStep3"
        @step-form="(form) => setStep3Form(form)"
        @active-step="(step) => setActiveStep(step)"/>

      <button
        v-if="activeStep === 4"
        type="submit"
        class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors"
        @click="createUser">
        Finish
      </button>
    </div>
  </section>
</template>
