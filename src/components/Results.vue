<template>
	<div class="results">
		<div class="container">
			<Header />
			<h1>Vos résultats</h1>
			<div class="result">
				<p>
					Vous avez répondu à un nombre de {{ score }} questions sur
					{{ totalQuestions }}, ce qui vous octroie {{ score }} points !
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
