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
    activeStep: (state) => state.step,
    activeStepForm(state): object {
      switch(state.activeStep) {
        case 1:
          return state.step1;
        case 2:
          return state.step2;
        case 3:
          return state.step3;
        default:
          return {};
      }
    },
    activeStepErrors(state) {
      switch(state.activeStep) {
        case 1:
          return state.errorsStep1;
        case 2:
          return state.errorsStep2;
        case 3:
          return state.errorsStep3;
        default:
          return {};
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
