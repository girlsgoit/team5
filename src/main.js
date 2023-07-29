

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import myHeader from './components/header.vue'
import myHeader2 from './components/header2.vue'

const app = createApp(App)
app.use(router)
app.component('myHeader', myHeader)
app.component('myHeader2', myHeader2)

app.mount('#app')