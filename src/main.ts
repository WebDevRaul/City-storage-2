import { createApp } from 'vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './services/veeValidate';

// Vue component
import App from './App.vue';

// Css
import '@/assets/css/global.css';

const vm = createApp(App);

// Vuex
vm.use(store);

// Router
vm.use(router);

// Plugins
vm.use(VeeValidatePlugin);

// App
vm.mount('#app');