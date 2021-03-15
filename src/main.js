import { createApp } from 'vue'
import router from './router'
import store from './store/index'

import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'

import './index.css'

createApp(App)
	.use(router)
	.use(store)
	.component('base-button', BaseButton)
	.mount('#app')
