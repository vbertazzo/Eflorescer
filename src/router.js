import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('./views/TheHome.vue') },
		{
			path: '/registrar',
			component: () => import('./views/auth/ClientSignup.vue')
		},
		{ path: '/carrinho', redirect: '/' }
	]
})

export default router
