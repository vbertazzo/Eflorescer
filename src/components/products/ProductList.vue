<template>
	<section class="mt-4 bg-primary-light flex flex-col items-center shadow-md">
		<div class="container py-4 flex flex-col items-center">
			<h2 class="text-xl text-center text-secondary">Infusões</h2>
			<div class="grid grid-cols-2 gap-4 m-4">
				<div
					v-for="product in products"
					:key="product.id"
					class="bg-white flex flex-col rounded-b-md shadow-sm"
				>
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
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue'

const products = [
	{
		id: 1,
		name: 'Rooibos Canela - 50g',
		image:
			'https://images.unsplash.com/photo-1603761944806-53219048ca6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
		price: 30.5
	},
	{
		id: 2,
		name: 'Rooibos African Sunset - 50g',
		image:
			'https://images.unsplash.com/photo-1610137312679-8de3a836b455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
		price: 34.5
	},
	{
		id: 3,
		name: 'Chá Vermelho Strawberry Cream - 50g',
		image:
			'https://images.unsplash.com/photo-1594136604897-29f7e564db27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
		price: 32.9
	},
	{
		id: 4,
		name: 'Chá Preto Chai Latte - 50g',
		image:
			'https://images.unsplash.com/photo-1591633767356-bbf4d2a3a833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
		price: 35.9
	}
]

const formatPrice = price => {
	const priceString = `${price.toFixed(2)}`.replace('.', ',')
	return `R$ ${priceString}`
}
</script>
