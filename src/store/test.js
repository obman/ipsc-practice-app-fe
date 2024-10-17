export default {
  state() {},
  actions: {
    async getTest() {
      return await this.$axios.$get('http://localhost:8080/api/v1/test/')
    }
  }
}
