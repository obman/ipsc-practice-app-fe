<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignFormStep1',
  props: {
    stepForm: {
      type: Object,
      required: true
    },
    errorsBag: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      form: {
        email: null,
        username: null,
      },
      errors: {
        email: '',
        username: ''
      }
    }
  },
  mounted() {
    this.form = this.stepForm;
    this.errors = this.errorsBag;
  },
  computed: {
    isEmailEmpty() {
      return !!this.form.email;
    },
    isEmailUnique() {
      return !this.form.email.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
    isUsernameEmpty() {
      return !!this.form.username;
    },
    isUsernameUnique() {
      return this.form.username.length > 3;
    },
  },
  methods: {
    validateForm() {
      this.errors.email = !this.isEmailEmpty ? 'Email is empty' : !this.isEmailUnique ? 'Missing @ or/and . in email' : '';
      const emailSuccess = this.isEmailEmpty && this.isEmailUnique;

      this.errors.username = !this.isUsernameEmpty ? 'Username is empty' : !this.isUsernameUnique ? 'Username must be longer than 3 characters' : '';
      const usernameSuccess = this.isUsernameEmpty && this.isUsernameUnique;

      return !(!emailSuccess || !usernameSuccess);
    },
    onSubmit() {
      if (!this.validateForm()) {
        return false;
      }

      this.$emit('step-form', this.form);
      this.$emit('active-step', 2);
    },
  }
})
</script>

<template>
  <div class="ipsc-signin-form1">
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
      <span class="errors email-error text-danger">{{ errors.email }}</span>
    </label>

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
      <span class="errors username-error text-danger">{{ errors.username }}</span>
    </label>

    <button
      type="submit"
      class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors"
      @click="onSubmit">
      Next
    </button>
  </div>
</template>
