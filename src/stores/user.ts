export const useUser = defineStore('user', {
  state() {
    return {
      user: {
        id: null,
        username: null
      }
    }
  },
  getters: {
    userItem(state) {
      return state.user
    }
  },
  actions: {
    setLoggedUser({ state }, user) {
      state.user = user;
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
});
