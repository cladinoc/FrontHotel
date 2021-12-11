import { createApp } from 'vue'
import Store from './store'
import App from './App.vue'
import router from './router'

import './styles/styles.scss'

createApp(App)
    .use( Store )
    .use( router )
    .mount('#app')
