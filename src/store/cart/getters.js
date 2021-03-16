export default {
	cart (state) {
		return state.cart
	},
	isCartEmpty (_, getters) {
		return getters.cartSize === 0
	},
	cartSize (state) {
		return state.cart.reduce((acc, curr) => acc + curr.quantity, 0)
	},
	total (state) {
		return state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
	}
}
