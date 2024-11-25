<script lang="ts">
export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
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
    this.form = this.data;
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
    }
  }
})
</script>

<template>
  <div class="ipsc-signin-form2">
    <label
      for="sign-first-name"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          {{ $t('signin.fields.first_name_label') }}
        </span>
      <UInput
        id="sign-first-name"
        v-model="form.firstName"
        type="text"
        color="text"
        class="w-full"
        required/>
      <span class="errors first-name-error text-danger">{{ errors.firstName }}</span>
    </label>

    <label
      for="sign-last-name"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          {{ $t('signin.fields.last_name_label') }}
        </span>
      <UInput
        id="sign-last-name"
        v-model="form.lastName"
        type="text"
        color="text"
        class="w-full"
        required/>
      <span class="errors last-name-error text-danger">{{ errors.lastName }}</span>
    </label>
  </div>
</template>
