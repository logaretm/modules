const { resolve } = require('path')

const DEFAULT_OPTIONS = {
  locale: 'en',
  delay: 0,
  errorBagName: 'errors',
  dictionary: null,
  strict: true,
  fieldsBagName: 'fields',
  classes: false,
  classNames: undefined,
  events: 'input|blur',
  inject: true,
  fastExit: true,
  aria: true,
  validity: false
}

module.exports = function module (moduleOptions) {
  const options = Object.assign({}, DEFAULT_OPTIONS, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    options
  })
}

module.exports.meta = require('./package.json')
