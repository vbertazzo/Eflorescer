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
})

const tryLogin = () => {
	store.dispatch('tryLogin')
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style></style>
