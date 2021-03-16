<template>
	<button v-if="!link" :class="mode" class="rounded-md flex items-center">
		<slot></slot>
	</button>
	<router-link
		v-else
		:to="to"
		:class="mode"
		class="rounded-md flex items-center"
	>
		<slot></slot>
	</router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const mode = computed(() => {
	if (props.mode === null) {
		return 'px-4 py-2 bg-primary hover:bg-primary-dark text-secondary font-semibold'
	}

	if (props.mode === 'flat') {
		return 'px-0 py-0 bg-transparent border-transparent text-secondary hover:text-black'
	}

	if (props.mode === 'outline') {
		return 'px-4 py-2 bg-transparent border-2 border-secondary text-secondary hover:bg-primary'
	}

	if (props.mode === 'symbol') {
		return 'p-1 bg-primary hover:bg-primary-dark text-secondary'
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
