<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "signin",
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        rePassword: ''
      },
      errors: {
        username: '',
        email: '',
        password: '',
        rePassword: '',
      }
    }
  },
  computed: {
    isUsernameEmpty() {
      return !!this.form.username;
    },
    isUsernameUnique() {
      return this.form.username.length > 3;
    },
    isEmailEmpty() {
      return !!this.form.email;
    },
    isEmailUnique() {
      return !this.form.email.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
    isPasswordEmpty() {
      return !!this.form.password;
    },
    isPasswordUnique() {
      return this.form.password.length > 6;
    },
    isRePasswordEmpty() {
      return !!this.form.rePassword;
    },
    isPasswordMatch() {
      return this.form.password === this.form.rePassword
    }
  },
  methods: {
    validateForm() {
      let success = true;

      // username validation
      this.errors.username = !this.isUsernameEmpty ? 'Username is empty' : !this.isUsernameUnique ? 'Username must be longer than 3 characters' : '';
      success = !this.isUsernameEmpty && !this.isUsernameUnique;

      // email validation
      this.errors.email = !this.isEmailEmpty ? 'Email is empty' : !this.isEmailUnique ? 'Missing @ or/and . in email' : '';
      success = !this.isEmailEmpty && !this.isEmailUnique;

      // validate password
      this.errors.password = !this.isPasswordEmpty ? 'Password is empty' : !this.isPasswordUnique ? 'Password must be longer than 6 characters' : '';
      success = !this.isPasswordEmpty && !this.isPasswordUnique;

      // validate repeat password
      this.errors.rePassword = !this.isRePasswordEmpty ? 'Repeat password is empty' : !this.isPasswordMatch ? 'Passwords do not match' : '';
      success = !this.isRePasswordEmpty && this.isPasswordMatch;

      return success;
    },
    onSubmit() {
      // validate the form
      if (! this.validateForm()) {
        return false;
      }

      // if everything OK, send POST to BE to save user
      // response must return Access token and user ID
      // which must be saved in store
      // on success reset form and errors !!
    }
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
    <form
      class="p-6 border border-secondary border-radius rounded"
      @submit.prevent="onSubmit">
      <label
        for="sign-username"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter username:
        </span>
        <input
          id="sign-username"
          v-model="form.username"
          type="text"
          name="ipsc-username"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span class="errors username-error text-danger">{{ this.errors.username }}</span>
      </label>
      <label
        for="sign-email"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter email:
        </span>
        <input
          id="sign-email"
          v-model="form.email"
          type="email"
          name="ipsc-email"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span class="errors email-error text-danger">{{ this.errors.email }}</span>
      </label>
      <label
        for="sign-password"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter password:
        </span>
        <input
          id="sign-password"
          v-model="form.password"
          type="password"
          name="ipsc-password"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span class="errors password-error text-danger">{{ this.errors.password }}</span>
      </label>
      <label
        for="sign-re-password"
        class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Repeat password:
        </span>
        <input
          id="sign-re-password"
          v-model="form.rePassword"
          type="password"
          name="ipsc-re-password"
          class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
        <span class="errors re-password-error text-danger">{{ this.errors.rePassword }}</span>
      </label>
      <button
        type="submit"
        class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors"
        @click="onSubmit">
        Login
      </button>
    </form>
  </section>
</template>
