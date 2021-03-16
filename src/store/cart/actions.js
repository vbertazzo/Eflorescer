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
	},
	removeItem (context, payload) {
		const { id } = payload

		const indexOfItemInCart = context.getters.cart.findIndex(
			item => item.id === id
		)

		context.commit('removeItem', { index: indexOfItemInCart })
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
	}
}
