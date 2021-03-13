<template>
	<header
		class="w-full h-16 px-3 flex justify-center items-center bg-primary border-b-4 border-secondary"
	>
		<nav class="w-11/12 m-auto flex justify-between items-center">
			<router-link to="/">
				<img
					:src="Logo"
					alt="Eflorescer Logo"
					title="Eflorescer - Chás e Infusões"
				/>
			</router-link>
			<ul class="flex justify-center items-center space-x-8">
				<li class="text-secondary">
					<router-link to="/perfil" title="Abrir perfil">
						<svg
							class="h-6 w-6 text-secondary hover:text-green-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</router-link>
				</li>
				<li>
					<router-link to="/carrinho" title="Abrir carrinho">
						<svg
							class="h-6 w-6 text-secondary hover:text-green-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
					</router-link>
				</li>
				<li class="text-secondary cursor-pointer" title="Abrir menu">
					<svg
						class="h-6 w-6 text-secondary hover:text-green-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import Logo from '../../assets/Logo.svg'
</script>
