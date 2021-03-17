<template>
	<section
		class="p-8 my-6 bg-primary-light shadow-md flex flex-col items-center"
	>
		<form
			@submit.prevent="submitForm"
			class="p-4 flex flex-col justify-center items-center rounded-md bg-white shadow-sm md:w-3/4"
		>
			<h2 class="text-lg text-center text-secondary">Registrar</h2>
			<div class="mt-4 flex flex-col space-y-2">
				<div>
					<label for="email" class="text-secondary">Email:</label>
					<input
						class="mt-1 py-1 px-2 text-secondary w-full border-2 border-gray-200 focus:border-primary"
						type="email"
						id="email"
						v-model.trim="email"
					/>
				</div>
				<div>
					<label for="password" class="text-secondary">Senha:</label>
					<input
						class="mt-1 py-1 px-2 text-secondary w-full border-2 border-gray-200 focus:border-primary"
						type="password"
						id="password"
						v-model="password"
					/>
				</div>
				<div>
					<label for="confirm-password" class="text-secondary"
						>Confirme sua senha:</label
					>
					<input
						class="mt-1 py-1 px-2 text-secondary w-full border-2 border-gray-200 focus:border-primary"
						type="password"
						id="confirm-password"
						v-model="confirmPassword"
					/>
				</div>
			</div>
			<base-button class="mt-8" :disabled="loading">
				<svg
					v-if="loading"
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				{{ !loading ? 'Registrar' : 'Registrando...' }}</base-button
			>
			<div class="mt-4">
				<p v-if="!formIsValid" class="text-sm text-red-700">
					Por favor, entre com um email e senha (ao menos 6 caracteres) válidos.
				</p>
				<p v-if="error">{{ error }}</p>
			</div>
		</form>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const formIsValid = ref(true)
const loading = ref(false)
const error = ref(null)

const validateForm = () => {
	if (
		email.value === '' ||
		!email.value.includes('@') ||
		password.value.length < 6 ||
		confirmPassword.value.length < 6 ||
		password.value !== confirmPassword.value
	) {
		return false
	}
	return true
}

const submitForm = async () => {
	formIsValid.value = validateForm()
	if (!formIsValid.value) {
		return
	}

	loading.value = true
	try {
		await store.dispatch('auth', {
			email: email.value,
			password: password.value,
			mode: 'signUp'
		})

		loading.value = false

		router.replace('/')
	} catch (err) {
		loading.value = false

		error.value =
			err.message || 'Falha na autenticação, tente novamente mais tarde'
	}
}
</script>
