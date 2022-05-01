<template>
	<div class="question">
		<h2>Question n°{{ question.number }}</h2>
		<p>{{ question.enonce }}</p>
		<div class="reponses">
			<button
				:ref="reponse.id"
				class="reponse"
				v-for="(reponse, index) in question.reponses"
				:key="index"
				@click="checkAnswer(reponse.good, reponse.id)"
			>
				{{ reponse.text }}
			</button>
		</div>
		<transition
			name="custom-classes-transition"
			enter-active-class="slide-in"
			leave-active-class="slide-out"
			mode="out-in"
		>
			<div class="comment" v-if="answered">
				<p>
					{{ question.commentary }}
				</p>
			</div>
		</transition>
		<button
			class="btn yellow"
			@click="nextQuestion"
			:disabled="disabled ? '' : disabled"
		>
			Question suivante
		</button>
	</div>
</template>

<script>
export default {
	name: 'Question',
	props: {
		question: Object,
	},
	data() {
		return {
			answered: false,
			goodAnswer: [],
			disabled: true,
		}
	},
	methods: {
		checkAnswer(value, id) {
			const correctAnswer = this.goodAnswer[0].id
			if (value) {
				this.$refs[id][0].classList.add('correct')
				this.$refs[id][0].style.backgroundColor = 'green'
				this.$store.commit('goodAnswer')
			} else {
				this.$refs[id][0].classList.add('incorrect')
				this.$refs[correctAnswer][0].classList.add('correct')
				this.$refs[correctAnswer][0].style.backgroundColor = 'green'
			}
			setTimeout(() => (this.answered = true), 1000)
			setTimeout(() => (this.disabled = false), 2000)
		},
		nextQuestion() {
			const refs = ['un', 'deux', 'trois', 'quatre']
			refs.map((ref) => {
				if (this.$refs[ref]) {
					console.log(this.$refs[ref])
				}
			})

			this.$emit('nextQuestion')
		},
	},
	mounted() {
		this.goodAnswer = this.question.reponses.filter((reponse) => reponse.good)
	},
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
@keyframes flashCorrect {
	0% {
		background-color: green;
	}
	10% {
		background-color: green;
	}
	25% {
		background-color: white;
	}
	50% {
		background-color: green;
	}
	75% {
		background-color: white;
	}
	100% {
		background-color: green;
	}
}
.question {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	h2 {
		font-size: $font-xxl;
		color: $color-004;
	}
	.reponses {
		display: flex;
		flex-wrap: wrap;
		width: 1000px;
		justify-content: center;
		margin: 50px auto;
		button {
			width: 400px;
			background-color: $color-001;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 20px;
			padding: 10px 0;
			margin: 10px;
			border: none;
			font-family: $font-001;
			font-size: $font-lg;
			color: $color-003;
		}
		.correct {
			animation-name: flashCorrect;
			animation-duration: 1.5s;
			color: $color-001;
		}
		.incorrect {
			background-color: red;
			color: $color-001;
		}
	}
	.yellow {
		width: fit-content;
		width: -moz-fit-content;
		padding: 10px 50px;
		align-self: center;
		margin-top: 50px;
		&:disabled {
			background-color: rgba($color: $color-002, $alpha: 0.5);
			color: rgba($color: $color-001, $alpha: 0.5);
			border: 2px solid rgba($color: $color-001, $alpha: 0.5);
			cursor: auto;
		}
	}
}

.comment {
	align-self: center;
	margin-top: 10px;
	p {
		color: $color-009;
		font-size: $font-xl;
	}
}
</style>
