import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { vScrollAnimation } from './directives/vScrollAnimation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('scroll-animation', vScrollAnimation)

app.mount('#app')
