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
			},
			beforeEnter (_, _2, next) {
				if (store.getters.isAuthenticated) {
					next('/')
				} else {
					next()
				}
			}
		},
		{
			path: '/login',
			component: () => import('./views/auth/ClientLogin.vue'),
			meta: {
				requiresUnauth: true
			},
			beforeEnter (_, _2, next) {
				if (store.getters.isAuthenticated) {
					next('/')
				} else {
					next()
				}
			}
		},
		{
			path: '/perfil',
			component: () => import('./views/auth/ClientProfile.vue'),
			meta: {
				requiresAuth: true
			},
			beforeEnter (_, _2, next) {
				if (!store.getters.isAuthenticated) {
					next('/login')
				} else {
					next()
				}
			}
		},
		{ path: '/carrinho', redirect: '/' }
	]
})

export default router
