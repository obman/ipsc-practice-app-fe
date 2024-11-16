<script>
import { defineComponent } from 'vue';
import { mapActions } from 'pinia'
import FormValidationHelper from '@/composables/FormValidationHelper';
import { useUser } from '@/stores/user'

export default defineComponent({
  name: 'LogInPage',
  layout: 'default',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: '',
        login: '',
        loginAdditional: ''
      },
    }
  },
  computed: {
    isEmailEmpty() {
      return !!this.form.email;
    },
    isEmailUnique() {
      return FormValidationHelper.isEmailUniqueValidation(this.form.email);
    },
    isPasswordEmpty() {
      return !!this.form.password;
    },
    isPasswordUnique() {
      return this.form.password.length > 6;
    },
  },
  methods: {
    validateForm() {
      let success = true;

      // email validation
      this.errors.email = !this.isEmailEmpty ? 'Email is empty' : !this.isEmailUnique ? 'Missing @ or/and . in email' : '';
      success = this.isEmailEmpty && this.isEmailUnique;

      // validate password
      this.errors.password = !this.isPasswordEmpty ? 'Password is empty' : !this.isPasswordUnique ? 'Password must be longer than 6 characters' : '';
      success = this.isPasswordEmpty && this.isPasswordUnique;

      return success;
    },
    async onSubmit() {
      // validate form
      if (!this.validateForm()) {
        return false;
      }

      // send POST to BE - on store
      const user = await this.fetchLogin(this.form);

      if (user) {
        // redirect to home
        this.$router.push({ name: 'index' });
      }
      else {
        this.errors.login = 'Login failed!';

        setTimeout(() => {
          this.errors.login = '';
          this.errors.loginAdditional = 'Try again. Wrong email or password';
        }, 1500);
      }
    },
    ...mapActions(useUser, ['fetchLogin'])
  }
})
</script>

<template>
  <section class="max-w-[20rem] mx-auto">
    <h1 class="mb-12 text-xl text-center text-text font-bold">Login to your account</h1>
    <form
      class="ipsc-login-form relative p-6 border border-secondary border-radius rounded"
      @submit.prevent="onSubmit">
      <label
        for="login-email"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Email:
        </span>
        <input
          id="login-email"
          v-model="form.email"
          type="email"
          name="ipsc-email"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span
          v-if="errors.email"
          class="errors email-error text-danger">
          {{ errors.email }}
        </span>
      </label>

      <label
        for="login-password"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Password:
        </span>
        <input
          id="login-password"
          v-model="form.password"
          type="password"
          name="ipsc-password"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span
          v-if="errors.password"
          class="errors password-error text-danger">
          {{ errors.password }}
        </span>
      </label>

      <button
        type="submit"
        class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors">
        Login
      </button>
      <div
        v-if="errors.login"
        class="login-error absolute top-0 left-0 w-full h-full">
        <div class="error-overlay absolute top-0 left-0 w-full h-full z-2"></div>
        <p class="error-info absolute top-1/2 left-1/2 p-2 rounded bg-danger text-white text-center z-4">{{ errors.login }}"</p>
      </div>
      <p
        v-if="errors.loginAdditional"
        class="login-additional-error mt-4 text-danger text-center">
        {{ errors.loginAdditional }}"
      </p>
    </form>
  </section>
</template>

<style src="@/assets/css/pages/login.css"></style>
