export default {
  state() {
    return {
      user: {
        id: null,
        username: null
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setLoggedUser({ commit }, user) {
      commit('setUser', user)
    },
    async fetchLogin({ getters, dispatch }, payload) {
      // validated data needs to be sent to BE
      const response = await this.$axios.$post('/v1/login', payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'}
      });

      if (!response || response.status === 'error') {
        return false;
      }

      dispatch('setLoggedUser', {
        id: response.userId,
        username: response.userName
      });

      return getters.user;
    }
  }
}
