export default function auth ({ next, store, router }) {
  if (!store.getters.auth.loggedIn) {
    return router.push({
      name: 'signin'
    })
  }

  return next()
}
