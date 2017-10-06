import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  locale: '<%= options.locale %>',
  delay: <%= options.delay %>,
  errorBagName: '<%= options.errorBagName %>',
  <% if (options.dictionary) { %>
    dictionary: options.dictionary
  <% } %>
  strict: <%= options.strict %>,
  fieldsBagName: '<%= options.fieldsBagName %>',
  classes: <%= options.classes %>,
  <% if (options.dictionary) { %>
    classNames: options.classNames,
  <% } %>
  events: '<%= options.events %>',
  inject: <%= options.inject %>,
  fastExit: <%= options.fastExit %>,
  aria: <%= options.aria %>,
  validity: <%= options.validity %>
})
