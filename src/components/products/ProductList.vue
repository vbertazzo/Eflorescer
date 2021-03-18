<template>
	<section class="mt-4 bg-primary-light flex flex-col items-center shadow-md">
		<div class="container py-4 flex flex-col items-center">
			<h2 class="text-xl text-center text-secondary xl:text-2xl">Infusões</h2>
			<ul class="grid grid-cols-2 gap-4 m-4 xl:mt-8 xl:grid-cols-4">
				<product-item
					v-for="product in products"
					:key="product.id"
					:product="product"
				></product-item>
			</ul>
		</div>
	</section>
</template>

<script setup>
import ProductItem from './ProductItem.vue'

const products = [
	{
		id: 1,
		name: 'Rooibos Canela - 50g',
		image:
			'https://images.unsplash.com/photo-1603761944806-53219048ca6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
		price: 30.5,
		credits: 'Photo by F Almousa (@ba6oo) on Unsplash'
	},
	{
		id: 2,
		name: 'Rooibos African Sunset - 50g',
		image:
			'https://images.unsplash.com/photo-1610137312679-8de3a836b455?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
		price: 34.5,
		credits: 'Photo by Lucas George Wendt (@lucasgwendt) on Unsplash'
	},
	{
		id: 3,
		name: 'Chá Vermelho Strawberry Cream - 50g',
		image:
			'https://images.unsplash.com/photo-1594136604897-29f7e564db27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
		price: 32.9,
		credits: 'Photo by Tea Creative │ Soo Chung (@teacreative) on Unsplash'
	},
	{
		id: 4,
		name: 'Chá Preto Chai Latte - 50g',
		image:
			'https://images.unsplash.com/photo-1591633767356-bbf4d2a3a833?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
		price: 35.9,
		credits: 'Photo by Tea Creative │ Soo Chung (@teacreative) on Unsplash'
	}
]
</script>
