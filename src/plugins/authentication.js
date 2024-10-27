export default ({ store }) => {
  if (process.client) {
    const user = localStorage.getItem('user');
    if (user) {
      store.dispatch('user/setLoggedUser', JSON.parse(user));
    }
  }
}
