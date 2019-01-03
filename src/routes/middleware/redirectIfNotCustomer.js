export default function redirectIfNotCustomer ({ next, store, router }) {
  if (!store.getters.auth.user.data.isCustomer) {
    return router.push({
      name: 'signin'
    })
  }

  return next()
}
