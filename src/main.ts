import { createApp } from 'vue'
import './styles/main.scss'
import router from './route'
import App from './App.vue'

const myApp = createApp(App);

myApp.use(router).mount('#app')
