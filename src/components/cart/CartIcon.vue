<template>
	<li class="relative">
		<router-link to="/carrinho" title="Abrir carrinho">
			<svg
				class="h-6 w-6 text-secondary hover:text-primary-dark"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
				/>
			</svg>
		</router-link>
		<div
			v-if="!cartIsEmpty"
			class="px-1 py-0.5 absolute left-3 -bottom-1 flex justify-center items-center bg-secondary rounded-full"
		>
			<span class="text-xs font-bold leading-none text-white">{{
				cartSize
			}}</span>
		</div>
	</li>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const cartSize = computed(() => {
	return store.getters.cartSize
})

const cartIsEmpty = computed(() => {
	return store.getters.isCartEmpty
})
</script>
