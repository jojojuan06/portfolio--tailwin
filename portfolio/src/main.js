import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.css'
// via npm install @mdi/font
import "@mdi/font/css/materialdesignicons.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord , faJs, faHtml5,faVuejs} from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faFile,faCube ,faFileLines,faCircle} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faYoutube, faInstagram, faLinkedin, faDiscord, faJs,faHtml5,faVuejs, faFile, faCube,faFileLines, faCircle)

const app = createApp(App)
//app.config.productionTip = false
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')



