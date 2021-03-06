const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  build: {
    extractCSS: true
  },
  serverMiddleware: ['@@/examples/api/auth'],
  auth: {
    endpoints: {
      login: { propertyName: 'token.accessToken' }
    },
    strategies: {
      invalid: {}
    }
  },
  modules: ['@nuxtjs/axios', '@@'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
