export const useSigninWizard = defineStore('signinWizard', {
  state: () => ({
    step: 1,
    form: {
      step1: {
        'email': null,
        'username': null
      },
      step2: {
        'firstName': null,
        'lastName': null
      },
      step3: {
        'password': null,
        'rePassword': null
      },
    },
    errors: {
      step1: {
        email: '',
        username: ''
      },
      step2: {
        firstName: '',
        lastName: ''
      },
      step3: {
        email: '',
        password: '',
        rePassword: ''
      },
    }
  }),
  getters: {
    step1: (state) => state.form.step1,
    step2: (state) => state.form.step2,
    step3: (state) => state.form.step3,
    activeStep: (state) => state.step,
    errorsStep1: (state) => state.errors.step1,
    errorsStep2: (state) => state.errors.step2,
    errorsStep3: (state) => state.errors.step3,
  },
  actions: {
    setActiveStep(step: number) {
      this.step = step;
    },
    setStep1Form(form: any) {
      this.form.step1 = form;
    },
    setStep2Form(form: any) {
      this.form.step2 = form;
    },
    setStep3Form(form: any) {
      this.form.step3 = form;
    },
  },
});
