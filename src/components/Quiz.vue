<template>
	<div class="quiz">
		<div class="container">
			<Header />
			<Score />
			<transition
				name="custom-classes-transition"
				enter-active-class="slide-in"
				leave-active-class="slide-out"
				mode="out-in"
			>
				<Question
					:question="currentQuestion"
					@nextQuestion="nextQuestion"
					:key="idOfCurrentQuestion"
				/>
			</transition>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Question from './Question'
import Header from './Header'
import Score from './Score.vue'

export default {
	name: 'Quiz',
	components: {
		Question,
		Header,
		Score,
	},
	data() {
		return {
			idOfCurrentQuestion: 0,
			currentQuestion: {},
		}
	},
	methods: {
		nextQuestion() {
			this.idOfCurrentQuestion += 1
			this.currentQuestion = this.questions[this.idOfCurrentQuestion]
		},
	},
	computed: mapState({
		questions: (state) => state.questions,
	}),
	created() {
		this.currentQuestion = this.questions[this.idOfCurrentQuestion]
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.quiz {
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
