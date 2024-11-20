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
      <UInput
        id="sign-email"
        v-model="form.email"
        type="email"
        color="text"/>
      <span class="errors email-error text-danger">{{ errors.email }}</span>
    </label>

    <label
      for="sign-username"
      class="block mb-6 cursor-pointer">
      <span class="block text-text">
        Enter username:
      </span>
      <UInput
        id="sign-username"
        v-model="form.username"
        size="sm"
        type="text"
        color="text"/>
      <span class="errors username-error text-danger">{{ errors.username }}</span>
    </label>

    <div class="flex justify-end">
      <UButton
        icon="i-heroicons-chevron-right-16-solid"
        size="md"
        color="secondary"
        label="Next"
        class="ml-1"
        trailing
        @click="onSubmit"/>
    </div>
  </div>
</template>
