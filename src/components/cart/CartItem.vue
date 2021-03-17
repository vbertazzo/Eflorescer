<template>
	<li class="mt-4 p-4 flex flex-col rounded-md bg-white shadow-sm">
		<div class="flex items-center">
			<div
				class="h-24 w-24 flex-shrink-0 rounded-md overflow-hidden md:h-28 md:w-28"
			>
				<img
					class="h-full w-full object-cover object-center"
					:src="product.image"
					:alt="product.name"
				/>
			</div>
			<div class="ml-4 flex flex-col w-full">
				<h3>{{ product.name }}</h3>
				<p class="mt-1 text-xs font-light">Cód. 4400 | Ref. 42033</p>
				<div class="mt-4 flex items-end justify-between">
					<div class="flex flex-col items-center">
						<label class="text-sm" for="quantity">Quantidade:</label>
						<input
							class="mt-1 w-16 text-sm text-center border-2 border-tertiary"
							type="text"
							inputmode="numeric"
							pattern="[0-9]*"
							id="quantity"
							:value="product.quantity"
							@change="handleQuantity"
						/>
					</div>
					<base-button
						class="mb-1 underline"
						mode="flat"
						@click="removeFromCart"
						>Remover</base-button
					>
				</div>
			</div>
		</div>
		<div class="mt-4 border-b-2 border-tertiary"></div>
		<div class="mt-2 flex justify-between">
			<h3 class="font-semibold text-secondary">Total</h3>
			<span class="font-semibold text-secondary">{{ formatPrice(total) }}</span>
		</div>
	</li>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import usePrice from '../../hooks/price.js'

const store = useStore()
const { formatPrice } = usePrice()

const props = defineProps({
	product: {
		id: Number,
		name: String,
		image: String,
		quantity: Number,
		price: Number
	}
})

const removeFromCart = () => {
	store.dispatch('removeItem', { id: props.product.id })
}

const total = computed(() => {
	return props.product.quantity * props.product.price
})

const handleQuantity = event => {
	const value = parseInt(event.target.value)

	if (Number.isInteger(value) && value > 0) {
		store.dispatch('updateQuantity', {
			mode: 'replace',
			id: props.product.id,
			qty: value
		})
	}
}
</script>
