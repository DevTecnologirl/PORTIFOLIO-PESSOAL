import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import './styles/main.scss'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
createApp(App).use(Quasar, quasarUserOptions).mount('#app')
