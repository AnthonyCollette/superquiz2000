<template>
	<main>
		<div class="container">
			<Header />
			<router-link to="/quiz" class="btn light-blue"
				>Démarrer le quiz</router-link
			>
		</div>
	</main>
</template>

<script>
import Header from './Header'

export default {
	name: 'Home',
	components: { Header },
	data() {
		return {
			variant: {
				class: 'light-blue',
				text: 'Démarrer le quiz',
			},
		}
	},
	methods: {
		start() {
			this.started = true
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
a {
	padding: 10px 30px;
}
</style>
