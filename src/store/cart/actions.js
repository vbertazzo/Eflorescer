export default {
	addItem (context, payload) {
		const { id } = payload

		const indexOfItemInCart = context.getters.cart.findIndex(
			item => item.id === id
		)

		if (indexOfItemInCart !== -1) {
			context.dispatch('updateQuantity', {
				mode: 'add',
				id,
				qty: 1
			})
			return
		}

		context.commit('addItem', { ...payload, quantity: 1 })
		context.dispatch('saveCart')
	},
	removeItem (context, payload) {
		const { id } = payload

		const indexOfItemInCart = context.getters.cart.findIndex(
			item => item.id === id
		)

		context.commit('removeItem', { index: indexOfItemInCart })
		context.dispatch('saveCart')
	},
	updateQuantity (context, payload) {
		const { id, qty, mode } = payload

		const indexOfItemInCart = context.getters.cart.findIndex(
			item => item.id === id
		)

		context.commit('updateQuantity', {
			mode,
			index: indexOfItemInCart,
			quantity: qty
		})
		context.dispatch('saveCart')
	},
	saveCart (context) {
		localStorage.setItem('cart', JSON.stringify(context.state.cart))
	},
	loadCart (context) {
		const cart = JSON.parse(localStorage.getItem('cart'))

		if (cart) {
			context.commit('setCart', cart)
		}
	}
}
