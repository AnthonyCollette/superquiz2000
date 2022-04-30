<template>
	<div class="welcome">
		<h1>Super Quiz 2000</h1>
		<p class="slogan">Le jeu qu'il est trop bien !</p>

		<p>Vous devez être connecté pour jouer !</p>
		<div class="flex-wrapper">
			<router-link class="btn light-blue" to="/login">Se connecter</router-link>
			<router-link class="btn light-blue" to="/signup">S'inscrire</router-link>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue'
import { useLoadUsers } from '@/components/Firebase/firebaseConfig'
export default {
	name: 'Welcome',
	components: {
		Button,
	},
	data() {
		return {
			button1: {
				text: 'Se connecter',
				class: 'light-blue',
			},
			button2: {
				text: "S'inscrire",
				class: 'yellow',
			},
		}
	},
	methods: {
		login() {
			console.log('Se connecter')
		},
		signup() {
			console.log("S'enregistrer")
		},
		checkUsers() {
			console.log(useLoadUsers)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.welcome {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	.flex-wrapper {
		margin-top: 20px;
		justify-content: center;
	}
	.btn {
		margin: 0 20px;
	}
	.slogan {
		font-style: italic;
		font-size: $font-xl;
		margin-bottom: 100px;
	}
}
</style>
