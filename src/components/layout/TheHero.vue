<template>
	<section class="relative py-4 bg-tertiary">
		<base-slider :items="items"></base-slider>
	</section>
</template>

<script setup>
import BaseSlider from '../ui/BaseSlider.vue'
const items = [
	{
		title: 'Promoção',
		subtitle: 'Ofertas a partir de R$ 15,99',
		imageAlt: 'Xícara branca com chá avermelhado sobre mesa florida',
		image:
			'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
	},
	{
		title: 'Frete Grátis',
		subtitle: 'Para compras acimas de R$ 150,00',
		imageAlt:
			'Xícara branca com chá esverdeado ao lado de bule branco, sobre mesa de madeira',
		image:
			'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
	},
	{
		title: 'Rooibos',
		subtitle: 'A infusão sul-africana que é um sucesso no mundo',
		imageAlt: 'Xícara transparente com chá avermelhado',
		image:
			'https://images.unsplash.com/photo-1597318181412-49af291f617f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D'
	}
]
</script>
