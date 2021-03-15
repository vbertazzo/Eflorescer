import router from '../../router'

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1'
const API_KEY = 'AIzaSyBURXa8rrdP61zIvIdFspwLUNW0vycwXWY'

let timer

export default {
	async auth (context, payload) {
		const mode = payload.mode
		const urlMode = mode === 'login' ? 'signInWithPassword' : 'signUp'

		const url = `${BASE_URL}/accounts:${urlMode}?key=${API_KEY}`

		const request = {
			email: payload.email,
			password: payload.password,
			returnSecureToken: true
		}

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(request)
		})

		const responseData = await response.json()

		if (!response.ok) {
			const error = new Error('Falha ao autenticar.')
			throw error
		}

		const { idToken, localId } = responseData

		const expiresIn = +responseData.expiresIn * 1000
		const expirationDate = new Date().getTime() + expiresIn

		localStorage.setItem('token', idToken)
		localStorage.setItem('userId', localId)
		localStorage.setItem('tokenExpiration', expirationDate)

		timer = setTimeout(() => {
			context.dispatch('logout', true)
		}, expiresIn)

		context.commit('setUser', {
			token: idToken,
			userId: localId
		})
	},
	tryLogin (context) {
		const token = localStorage.getItem('token')
		const userId = localStorage.getItem('userId')
		const tokenExpiration = localStorage.getItem('tokenExpiration')

		const expiresIn = +tokenExpiration - new Date().getTime()

		if (expiresIn < 0) {
			return
		}

		timer = setTimeout(() => {
			context.dispatch('logout', true)
		}, expiresIn)

		if (token && userId) {
			context.commit('setUser', {
				token,
				userId
			})
		}
	},
	logout (context, autoLogout = false) {
		localStorage.removeItem('userId')
		localStorage.removeItem('token')
		localStorage.removeItem('tokenExpiration')

		clearTimeout(timer)

		context.commit('setUser', {
			token: null,
			userId: null
		})

		if (autoLogout) {
			router.replace('/')
		}
	}
}
