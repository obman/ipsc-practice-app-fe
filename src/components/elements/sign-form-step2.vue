<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignFormStep2',
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
        firstName: null,
        lastName: null,
      },
      errors: {
        firstName: '',
        lastName: ''
      }
    }
  },
  mounted() {
    this.form = this.stepForm;
    this.errors = this.errorsBag;
  },
  computed: {
    isFirstNameEmpty() {
      return !!this.form.firstName;
    },
    isFirstNameUnique() {
      return this.form.firstName.length > 3;
    },
    isLastNameEmpty() {
      return !!this.form.lastName;
    },
    isLastNameUnique() {
      return this.form.lastName.length > 3;
    },
  },
  methods: {
    validateForm() {
      this.errors.firstName = !this.isFirstNameEmpty ? 'Username is empty' : !this.isFirstNameUnique ? 'Username must be longer than 3 characters' : '';
      const successName = this.isFirstNameEmpty && this.isFirstNameUnique;

      this.errors.lastName = !this.isLastNameEmpty ? 'Username is empty' : !this.isLastNameUnique ? 'Username must be longer than 3 characters' : '';
      const successSurname = this.isLastNameEmpty && this.isLastNameUnique;

      return !(!successName || !successSurname);
    },
    backStep() {
      this.$emit('active-step', 1);
    },
    onSubmit() {
      if (!this.validateForm()) {
        return false;
      }

      this.$emit('step-form', this.form);
      this.$emit('active-step', 3);
    },
  }
})
</script>

<template>
  <div class="ipsc-signin-form2">
    <label
      for="sign-first-name"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter first name:
        </span>
      <input
        id="sign-first-name"
        v-model="form.firstName"
        type="text"
        name="ipsc-first-name"
        class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
      <span class="errors first-name-error text-danger">{{ errors.firstName }}</span>
    </label>

    <label
      for="sign-last-name"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          Enter last name:
        </span>
      <input
        id="sign-last-name"
        v-model="form.lastName"
        type="text"
        name="ipsc-last-name"
        class="block w-full px-2 py-1 border border-secondary border-rounded rounded outline-secondary">
      <span class="errors last-name-error text-danger">{{ errors.lastName }}</span>
    </label>

    <button
      type="submit"
      class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors"
      @click="backStep">
      Back
    </button>
    <button
      type="submit"
      class="block w-full px-2 py-1 mt-4 border border-secondary rounded bg-secondary text-white hover:bg-white hover:text-secondary transition-colors"
      @click="onSubmit">
      Next
    </button>
  </div>
</template>
