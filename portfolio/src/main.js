import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
// via npm install @mdi/font
import "@mdi/font/css/materialdesignicons.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord)

const app = createApp(App)
//app.config.productionTip = false
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')



