<template>
	<section v-if="isEmpty" class="p-8 my-6 bg-primary-light shadow-md">
		<div
			class="p-4 flex flex-col justify-center items-center rounded-md bg-white shadow-sm"
		>
			<h2 class="text-lg text-center text-secondary">Ops!</h2>
			<div class="mt-4 flex space-x-2">
				<p class="font-light">Seu carrinho de compras está vazio.</p>
			</div>
			<base-button class="mt-6 uppercase" @click="goBack">Voltar</base-button>
		</div>
	</section>
	<section
		v-else
		class="p-4 my-6 bg-primary-light shadow-md flex flex-col items-center"
	>
		<div class="flex w-full max-w-lg space-x-1 justify-start">
			<h2>Carrinho</h2>
			<span class="font-light">
				({{ cartSize }} {{ cartSize > 1 ? 'itens' : 'item' }})</span
			>
		</div>
		<div class="w-full max-w-lg">
			<transition-group
				class="space-y-2"
				tag="ul"
				leave-active-class="absolute"
				move-class="transition-transform duration:1000 ease-linear"
			>
				<cart-item
					v-for="product in cart"
					:key="product.id"
					:product="product"
				></cart-item>
			</transition-group>
		</div>
		<div
			class="mt-4 p-4 flex flex-col justify-between rounded-md bg-white shadow-sm w-full max-w-lg"
		>
			<div class="mt-2 flex justify-between">
				<p class="text-sm font-normal text-secondary">Subtotal</p>
				<span class="text-sm font-normal text-secondary">{{
					formatPrice(cartTotal)
				}}</span>
			</div>
			<div class="mt-2 flex justify-between">
				<p class="text-sm font-normal text-secondary">Frete</p>
				<span class="text-sm font-normal text-secondary">R$ 0,00</span>
			</div>
			<div class="mt-4 border-b-2 border-gray-200"></div>
			<div class="mt-2 flex justify-between">
				<h3 class="font-bold text-secondary">Total</h3>
				<span class="font-bold text-secondary">{{
					formatPrice(cartTotal)
				}}</span>
			</div>
		</div>
		<base-button class="mt-4">Finalizar Compra</base-button>
	</section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import usePrice from '../hooks/price.js'

import CartItem from '../components/cart/CartItem.vue'

const store = useStore()
const router = useRouter()
const { formatPrice } = usePrice()

const cart = computed(() => {
	return store.getters.cart
})

const cartSize = computed(() => {
	return store.getters.cartSize
})

const isEmpty = computed(() => {
	return store.getters.isCartEmpty
})

const cartTotal = computed(() => {
	return store.getters.total
})

const goBack = () => {
	router.back('/')
}
</script>
