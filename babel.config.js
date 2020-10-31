module.exports = {
  presets: [
    '@vue/app'
  ],
  proxyTable:{
    '/apis':{
      target:'http://localhost:8888'
    }
  }
}
