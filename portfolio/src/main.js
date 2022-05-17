import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
// via npm install @mdi/font
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App)
.use(router)
.mount('#app')



