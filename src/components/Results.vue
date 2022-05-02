<template>
	<div class="results">
		<div class="container">
			<Header />
			<h1>Vos résultats</h1>
			<div class="result">
				<p>Vous avez obtenu un total de {{ score }} points !</p>
				<p v-if="score < totalQuestions / 2">
					Vous devriez passer plus de temps à nos soirées...
				</p>
				<p v-if="score > totalQuestions / 2 && score !== totalQuestions">
					Bien joué ! Vous connaissez bien votre sujet !
				</p>
				<p v-if="score === totalQuestions">
					Bravo ! Vous ne ratez aucune sortie !
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './Header'
export default {
	name: 'Results',
	components: {
		Header,
	},
	computed: mapState({
		score: (state) => state.score,
		totalQuestions: (state) => state.questions.length,
	}),
}
</script>

<style lang="scss" scoped>
.result {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
}
</style>
