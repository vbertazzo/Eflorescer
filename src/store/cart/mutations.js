export default {
	addItem (state, payload) {
		state.cart.push(payload)
	},
	removeItem (state, payload) {
		const { index } = payload
		state.cart.splice(index, 1)
	},
	updateQuantity (state, payload) {
		const { index, quantity, mode } = payload

		if (mode === 'add') {
			state.cart[index].quantity += quantity
		}

		if (mode === 'replace') {
			state.cart[index].quantity = quantity
		}
	},
	setCart (state, payload) {
		state.cart = payload
	}
}
