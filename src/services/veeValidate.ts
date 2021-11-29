import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from 'vee-validate';
import { required, email, min, max } from '@vee-validate/rules';
import { App } from 'vue';

export default {
  install(app: App) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
    defineRule('max', max);
  }
};