// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './vendor/jquery/jquery'
// import './vendor/bootstrap/js/'
// import './assets/js/isotope.min.js'
// import './assets/js/owl-carousel.js'
import './assets/js/tabs.js'
import './assets/js/popup.js'
// import './assets/js/custom.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
