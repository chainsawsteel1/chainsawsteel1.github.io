import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './registerServiceWorker'
import 'ress'
import './css/main.css'
import './css/color.css'

createApp(App).use(router).mount('#app');
