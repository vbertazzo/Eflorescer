<template>
	<header
		class="w-full h-16 px-3 flex justify-center items-center bg-primary border-b-4 border-secondary"
	>
		<nav class="w-11/12 m-auto flex justify-between items-center">
			<img :src="Logo" alt="Eflorescer Logo" />
			<ul class="flex justify-center items-center space-x-8">
				<li class="text-secondary">
					<img :src="UserIcon" alt="Abrir perfil" />
				</li>
				<li class="text-secondary">
					<img :src="ShoppingBagIcon" alt="Abrir carrinho" />
				</li>
				<li class="text-secondary">
					<img :src="MenuIcon" alt="Abrir menu" />
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import Logo from '../../assets/Logo.svg'
import UserIcon from '../../assets/User.svg'
import MenuIcon from '../../assets/Menu.svg'
import ShoppingBagIcon from '../../assets/ShoppingBag.svg'

export default {
	components: [Logo, MenuIcon, UserIcon, ShoppingBagIcon],
	setup () {
		return { Logo, MenuIcon, UserIcon, ShoppingBagIcon }
	}
}
</script>
