<script lang="ts">
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
  computed: {},
  methods: {
    onBack() {
      this.$emit('on-back', this.form);
    },
    async onSubmit(event) {
      event.preventDefault();
      const payload = {
        email: this.step1.email,
        username: this.step1.username,
        first_name: this.step2.firstName,
        last_name: this.step2.lastName,
        password: this.step3.password
      };
      this.fetchRegister(payload);
      console.log (this.step1);
      console.log (this.step2);
      console.log (this.step3);
    }
  }
})
</script>

<template>
  <div class="ipsc-signin-form4">
    <UButton
      icon="i-heroicons-chevron-left-16-solid"
      size="md"
      color="secondary"
      variant="solid"
      label="Back"
      class="w-full mb-2 justify-center cursor-pointer"
      @click="onBack"/>
    <UButton
      size="md"
      color="secondary"
      variant="solid"
      type="submit"
      label="Create account"
      class="block w-full cursor-pointer"
      @click="onSubmit($event)"/>
  </div>
</template>
