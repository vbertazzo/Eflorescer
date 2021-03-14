<template>
	<li class="bg-white flex flex-col rounded-b-md shadow-sm">
		<div class="rounded-t-md overflow-hidden">
			<img
				class="h-36 object-cover object-center"
				:src="product.image"
				:alt="product.name"
			/>
		</div>
		<div class="h-32 p-3 flex flex-col justify-between">
			<p class="text-sm">{{ product.name }}</p>
			<div class="mt-2 flex justify-between items-center">
				<p>{{ formatPrice(product.price) }}</p>
				<button
					class="h-10 w-10 rounded-md bg-primary hover:bg-primary-dark shadow-sm"
					title="Adicionar ao carrinho"
				>
					<svg
						class="text-secondary hover:text-tertiary"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</button>
			</div>
		</div>
	</li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	product: Object
})

const formatPrice = price => {
	const priceString = `${price.toFixed(2)}`.replace('.', ',')
	return `R$ ${priceString}`
}
</script>
