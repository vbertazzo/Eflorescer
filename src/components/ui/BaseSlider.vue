<template>
	<div>
		<div>
			<div
				class="absolute bottom-0 mx-2 mb-5 px-4 py-3 bg-primary-light bg-opacity-90 shadow-md xl:mb-10 xl:ml-10 2xl:left-1/4 2xl:-ml-16"
				:class="{ hidden: imageOnly }"
			>
				<h2
					class="text-base font-black uppercase text-secondary xl:text-xl 2xl:text-2xl"
				>
					{{ currentItem.title }}
				</h2>
				<p class="mt-1 leading-5 text-secondary xl:text-lg 2xl:text-xl">
					{{ currentItem.subtitle }}
				</p>
			</div>
			<img
				class="h-64 object-cover object-center md: w-full md:h-80 xl:h-96"
				:src="currentItem.image"
				:alt="currentItem.imageAlt"
				:title="currentItem.credits"
			/>
		</div>
		<button
			@click="previous"
			class="absolute h-8 w-8 top-1/2 transform -translate-y-1/2 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 2xl:left-2 "
		>
			<svg
				class="text-secondary hover:text-primary-dark"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</button>
		<button
			@click="next"
			class="absolute h-8 w-8 top-1/2 right-0 transform -translate-y-1/2 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 2xl:right-2"
		>
			<svg
				class="text-secondary hover:text-primary-dark"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</button>
	</div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref, watch } from 'vue'

const props = defineProps({
	items: Array,
	imageOnly: Boolean
})
const index = ref(0)
let time = null

const currentItem = computed(() => {
	return props.items[index.value]
})

const previous = () => {
	index.value--
	if (index.value < 0) {
		index.value = props.items.length - 1
	}
	clearInterval(time)
}

const next = () => {
	index.value++
	if (index.value === props.items.length) {
		index.value = 0
	}
	clearInterval(time)
}

onMounted(() => {
	index.value++
})

watch(index, () => {
	time = setTimeout(() => {
		next()
	}, 5000)
})
</script>
