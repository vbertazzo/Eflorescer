<template>
	<div>
		<the-header></the-header>
		<router-view v-slot="{ Component }">
			<component :is="Component"></component>
		</router-view>
		<the-footer></the-footer>
	</div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

const store = useStore()

onBeforeMount(() => {
	tryLogin()
	tryLoadCart()
})

const tryLogin = () => {
	store.dispatch('tryLogin')
}

const tryLoadCart = () => {
	store.dispatch('loadCart')
}
</script>

<style></style>
