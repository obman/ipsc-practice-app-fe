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
    this.form = this.data;
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
    }
  }
})
</script>

<template>
  <div class="ipsc-signin-form3">
    <label
      for="sign-password"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          {{ $t('signin.fields.password_label') }}
        </span>
      <UInput
        id="sign-password"
        v-model="form.password"
        type="password"
        color="text"
        class="w-full"
        required/>
      <span class="errors password-error text-danger">{{ errors.password }}</span>
    </label>

    <label
      for="sign-re-password"
      class="block mb-6 cursor-pointer">
        <span class="block text-text">
          {{ $t('signin.fields.re_password_label') }}
        </span>
      <UInput
        id="sign-re-password"
        v-model="form.rePassword"
        type="password"
        color="text"
        class="w-full"
        required/>
      <span class="errors re-password-error text-danger">{{ errors.rePassword }}</span>
    </label>
  </div>
</template>
