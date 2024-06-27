import { createApp } from 'vue'
import './styles/main.scss'
import router from './route'
import { createPinia } from 'pinia'
import vMotion from "@/directives/vMotion";
import App from './App.vue'

const myApp = createApp(App);
const pinia = createPinia()

myApp.directive('motion', vMotion);
myApp.use(router).use(pinia).mount('#app')
