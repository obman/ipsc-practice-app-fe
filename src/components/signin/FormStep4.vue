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
  computed: {},
  methods: {
    /*async onSubmit(event) {
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
    }*/
  }
})
</script>

<template>
  <div class="ipsc-signin-form4">
    <!-- Display all the data -->
  </div>
</template>
