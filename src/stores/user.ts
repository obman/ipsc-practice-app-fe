type User = {
  id: number|null,
  username: string|null,
  token: string|null
}

export const useUser = defineStore('user', {
  state() {
    return {
      user: {
        id: null,
        username: null,
        token: null
      }
    }
  },
  getters: {
    userItem(state): User {
      //console.log (localStorage);
      //let user = localStorage.getItem('user-logged');
      //return user ?? state.user;
      return state.user;
    }
  },
  actions: {
    setLoggedUser(user): void {
      this.user = user;
    },
    isUserLoggedIn(): boolean {
      const userLogged = JSON.parse(localStorage.getItem('user-logged'));
      if (userLogged) {
        this.setLoggedUser(userLogged);
        return true;
      }

      return false;
    },
    async fetchLogin(payload: object): Promise<any> {
      const response = await $fetch('/api/v1/auth', {
        method: 'POST',
        body: payload
      });

      if (!response || response.status === 'error') {
        return false;
      }

      const token = response.token.length > 1 ? response.token.split('|')[1] : null;
      if (token === null) {
        return false;
      }

      this.setLoggedUser({
        id: response.id,
        username: response.username && response.username.length > 1 ? response.username: null,
        token: token
      })

      // save to session or cookie or local storage logged in user
      localStorage.setItem('user-logged', JSON.stringify(this.userItem));
      return this.userItem;
    }
  }
});
