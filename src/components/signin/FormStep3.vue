<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
        password: null,
        rePassword: null
      },
      errors: {
        password: '',
        rePassword: ''
      }
    }
  },
  mounted() {
    this.form = this.stepForm;
    this.errors = this.errorsBag;
  },
  computed: {
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
    },
  },
  methods: {
    validateForm() {
      this.errors.password = !this.isPasswordEmpty ? 'Password is empty' : !this.isPasswordUnique ? 'Password must be longer than 6 characters' : '';
      const successPassword = this.isPasswordEmpty && this.isPasswordUnique;

      this.errors.rePassword = !this.isRePasswordEmpty ? 'Repeat password is empty' : !this.isPasswordMatch ? 'Passwords do not match' : '';
      const successRePassowrd = this.isRePasswordEmpty && this.isPasswordMatch;

      return !(!successPassword || !successRePassowrd);
    },
    backStep() {
      this.$emit('active-step', 2);
    },
    onSubmit() {
      if (!this.validateForm()) {
        return false;
      }

      this.$emit('step-form', this.form);
      this.$emit('active-step', 4);
    },
  }
})
</script>

<template>
  <div class="ipsc-signin-form3">
    <label
      for="sign-password"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter password:
        </span>
      <UInput
        id="sign-password"
        v-model="form.password"
        type="password"
        color="text"/>
      <span class="errors password-error text-danger">{{ errors.password }}</span>
    </label>

    <label
      for="sign-re-password"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Repeat password:
        </span>
      <UInput
        id="sign-re-password"
        v-model="form.rePassword"
        type="password"
        color="text"
        class="w-full"/>
      <span class="errors re-password-error text-danger">{{ errors.rePassword }}</span>
    </label>

    <UButtonGroup
      size="md"
      class="justify-end w-full">
      <UButton
        icon="i-heroicons-chevron-left-16-solid"
        color="secondary"
        label="Back"
        class="mr-1"
        @click="backStep"/>
      <UButton
        icon="i-heroicons-chevron-right-16-solid"
        color="secondary"
        label="Next"
        class="ml-1"
        trailing
        @click="onSubmit"/>
    </UButtonGroup>
  </div>
</template>
