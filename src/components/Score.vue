<template>
	<div class="score">
		<h2 v-if="score > 1">Score : {{ score }} points</h2>
		<h2 v-if="score < 2">Score : {{ score }} point</h2>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Score',
	computed: mapState({
		score: (state) => state.score,
	}),
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

h2 {
	font-size: $font-xl;
	color: $color-008;
	font-weight: 400;
}
</style>
