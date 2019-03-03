const isDev = process.env.NODE_ENV !== 'production'

export default {
  modules: ['@nuxtjs/axios'],
  axios: {
    debug: isDev
  }
}
