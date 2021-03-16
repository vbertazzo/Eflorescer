export default function usePrice () {
	const formatPrice = price => {
		const formatter = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		})
		return formatter.format(price)
	}

	return {
		formatPrice
	}
}
