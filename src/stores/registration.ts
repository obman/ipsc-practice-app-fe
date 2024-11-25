export const useRegistration = defineStore('registrationStore', {
  state: () => ({
    data: {
      email: null,
      username: null,
      firstName: null,
      lastName: null,
      password: null,
      rePassword: null,
    }
  }),
  getters: {
    registrationData(state) { return state.data; }
  },
  actions: {
    setData(step: number, form: any) {
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
