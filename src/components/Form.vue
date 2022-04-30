<template>
	<form>
		<div class="input-wrapper">
			<label ref="labelName" for="name">Nom</label>
			<input
				ref="inputName"
				type="text"
				name="name"
				@focus="getFocus(this.$refs.labelName)"
				@blur="loseFocus(this.$refs.labelName, this.$refs.inputName)"
			/>
		</div>
		<div class="input-wrapper">
			<label ref="labelEmail" for="email">Email</label>
			<input
				ref="inputEmail"
				type="email"
				name="email"
				@focus="getFocus(this.$refs.labelEmail)"
				@blur="loseFocus(this.$refs.labelEmail, this.$refs.inputEmail)"
			/>
		</div>
		<button class="btn yellow">S'inscrire</button>
	</form>
</template>

<script>
export default {
	name: 'Form',
	data() {
		return {
			hasFocus: false,
		}
	},
	methods: {
		getFocus(label) {
			label.style.top = '-5px'
		},
		loseFocus(label, input) {
			if (input.value === '') {
				label.style.top = '50%'
			}
		},
	},
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
form {
	width: 300px;
	font-size: $font-lg;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	color: $color-008;
	.input-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-bottom: 20px;

		label {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 20px;
		}
		input {
			width: 100%;
			padding: 10px 20px;
			border: none;
			border-bottom: 1px solid $color-008;
			background-color: transparent;
			color: $color-007;
			font-family: $font-001;
			font-size: $font-lg;
			&:focus-visible {
				outline: none;
			}
		}
	}
}
</style>
