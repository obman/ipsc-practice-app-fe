export default {
  state() {
    return {
      user: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    async fetchLogin({ commit }, payload) {
      // validated data needs to be sent to BE
      const response = await this.$axios.$post('http://localhost:8080/api/v1/login/', payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'}
      });

      if (! response) {
        return false;
      }

      console.log (response);
      commit('setUser', response.data.user);
    }
  }
}
