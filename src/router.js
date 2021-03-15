import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('./views/TheHome.vue') },
		{
			path: '/registrar',
			component: () => import('./views/auth/ClientSignup.vue'),
			meta: {
				requiresUnauth: true
			}
		},
		{
			path: '/login',
			component: () => import('./views/auth/ClientLogin.vue'),
			meta: {
				requiresUnauth: true
			}
		},
		{ path: '/carrinho', redirect: '/' }
	]
})

router.beforeEach((to, _, next) => {
	if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		next('/')
	}

	next()
})

export default router
