import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('./views/TheHome.vue') },
		{ path: '/perfil', redirect: '/' },
		{ path: '/carrinho', redirect: '/' }
	]
})

export default router
