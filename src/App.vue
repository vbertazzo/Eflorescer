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
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style></style>
