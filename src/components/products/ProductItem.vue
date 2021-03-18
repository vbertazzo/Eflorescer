<template>
	<li class="bg-white flex flex-col rounded-b-md shadow-sm md:w-56">
		<div class="relative rounded-t-md overflow-hidden">
			<img
				class="h-36 object-cover object-center md: w-full"
				:src="product.image"
				:srcset="
					`${product.image}&fit=crop&w=640&q=80 500w,
					${product.image}&fit=crop&w=768&q=80 768w,
					${product.image}&fit=crop&w=1024&q=80 1024w,
					${product.image}&fit=crop&w=1280&q=80 1280w,
					${product.image}&fit=crop&w=1536&q=80 1536w`
				"
				:alt="product.name"
				:title="product.credits"
			/>
		</div>
		<div class="h-32 p-3 flex flex-col justify-between xl:h-36">
			<p class="text-sm md:text-lg">{{ product.name }}</p>
			<div class="mt-2 flex justify-between items-center">
				<p class="md:text-lg">{{ formatPrice(product.price) }}</p>
				<base-button
					mode="symbol"
					title="Adicionar ao carrinho"
					@click="addToCart"
					:disabled="disabled"
				>
					<svg
						class="h-8 w-8"
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
				</base-button>
			</div>
		</div>
	</li>
</template>

<script setup>
import { defineProps, ref, onUnmounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
	product: Object
})

const disabled = ref(false)
let timeout = null

const addToCart = () => {
	disabled.value = true

	timeout = setTimeout(() => {
		disabled.value = false
	}, 300)

	store.dispatch('addItem', props.product)
}

onUnmounted(() => {
	clearTimeout(timeout)
})

const formatPrice = price => {
	const priceString = `${price.toFixed(2)}`.replace('.', ',')
	return `R$ ${priceString}`
}
</script>
