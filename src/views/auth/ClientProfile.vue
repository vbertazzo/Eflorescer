<template>
	<section
		class="p-8 my-6 bg-primary-light shadow-md flex flex-col items-center"
	>
		<div
			class="p-4 flex flex-col justify-center items-center rounded-md bg-white shadow-sm md:w-3/4 xl:w-2/4 2xl:w-2/5"
		>
			<h2 class="text-lg text-center text-secondary">Perfil</h2>
			<div class="mt-4 flex space-x-2">
				<p class="font-light">Email:</p>
				<h3>{{ email }}</h3>
			</div>
			<div class="mt-8 flex space-x-4">
				<base-button @click="goBack">Voltar</base-button>
				<base-button @click="logout">Deslogar</base-button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = computed(() => {
	return store.getters.email
})

const goBack = () => {
	router.back()
}

const logout = () => {
	store.dispatch('logout')
	router.replace('/')
}
</script>
