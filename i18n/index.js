export const CN = {
  home: '家',
  address: '地址'
}

export const EN = {
  home: 'home',
  address: 'address'
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$trans = function(key) {
      const local = this.$root.local
      return options[local][key]
    }
  }
}