<template>
	<button
		v-if="!link"
		:class="mode"
		class="px-4 py-2 rounded-md flex items-center"
	>
		<slot></slot>
	</button>
	<router-link
		v-else
		:to="to"
		:class="mode"
		class="px-4 py-2 rounded-md flex items-center"
	>
		<slot></slot>
	</router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const mode = computed(() => {
	if (props.mode === null) {
		return 'bg-primary hover:bg-primary-dark'
	}

	if (props.mode === 'flat') {
		return 'bg-transparent border-transparent text-secondary hover:bg-primary'
	}

	if (props.mode === 'outline') {
		return 'bg-transparent border-2 border-secondary text-secondary hover:bg-primary'
	}
})

const props = defineProps({
	mode: {
		type: String,
		required: false,
		default: null
	},
	link: {
		type: Boolean,
		required: false,
		default: false
	},
	to: {
		type: String,
		required: false,
		default: '/'
	}
})
</script>
