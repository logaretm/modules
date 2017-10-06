# VeeValidate

[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/vee-validate/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/vee-validate)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/vee-validate.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/vee-validate)
[![Dependencies](https://david-dm.org//status.svg?style=flat-square)](https://david-dm.org/)

> A Nuxt module to add [vee-validate](https://github.com/baianat/vee-validate) to your project.

[📖 **Release Notes**](./CHANGELOG.md)

## Features

This module adds vee-validate to your project, allowing you to start validating inputs quickly with Nuxt.

## Setup
- Add `@nuxtjs/vee-validate` dependency using yarn or npm to your project
- Add `@nuxtjs/vee-validate` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/vee-validate',

    // With options
    ['@nuxtjs/vee-validate', { /* vee-validate config */ }],
 ]
}
```

Here is what the config looks like with its default values, which is the same as vee-validate original config.

```js
const config = {
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
};
```

## Usage

After setting it up, you can start using vee-validate with your Nuxt project.

For more details about vee-validate visit the [repository](https://github.com/baianat/vee-validate) or the [documentation](http://vee-validate.logaretm.com/).

## License

MIT
