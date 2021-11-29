import { createApp } from 'vue';
import router from './router';
import store from './store';

// Vue component
import App from './App.vue';

// Css
import '@/assets/css/global.css';

const vm = createApp(App);

vm.use(store);
vm.use(router);
vm.mount('#app');
