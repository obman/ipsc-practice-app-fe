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
    activeStepForm(state): object {
      switch(state.activeStep) {
        case 1:
          return state.step1;
        case 2:
          return state.step2;
        case 3:
          return state.step3;
      }
    },
    errorsStep1: (state) => state.errors.step1,
    errorsStep2: (state) => state.errors.step2,
    errorsStep3: (state) => state.errors.step3,
    activeStepErrors(state) {
      switch(state.activeStep) {
        case 1:
          return state.errorsStep1;
        case 2:
          return state.errorsStep2;
        case 3:
          return state.errorsStep3;
      }
    }
  },
  actions: {
    setActiveStep(step: number) {
      this.step = step;
    },
    setActiveStepForm(step: number, form: any) {
      switch(step) {
        case 1:
          this.form.step1 = form;
          break;
        case 2:
          this.form.step2 = form;
          break;
        case 3:
          this.form.step3 = form;
          break;
      }
    },
  },
});
