<template>
	<form @submit.prevent="isAuth ? '' : register">
		<div class="input-wrapper" v-if="!isAuth">
			<label ref="labelName" for="name">Nom</label>
			<input
				ref="inputName"
				type="text"
				name="name"
				@focus="getFocus(this.$refs.labelName)"
				@blur="loseFocus(this.$refs.labelName, this.$refs.inputName)"
				v-model="name"
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
				v-model="email"
			/>
		</div>
		<div class="input-wrapper">
			<label ref="labelPassword" for="password">Mot de passe</label>
			<input
				ref="inputPassword"
				type="password"
				name="password"
				@focus="getFocus(this.$refs.labelPassword)"
				@blur="loseFocus(this.$refs.labelPassword, this.$refs.inputPassword)"
				v-model="password"
			/>
		</div>

		<input type="submit" class="btn yellow" />
	</form>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './Firebase/firebaseConfig'

export default {
	name: 'Form',
	props: {
		isAuth: Boolean,
	},
	data() {
		return {
			hasFocus: false,
			name: '',
			email: '',
			password: '',
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
		register() {
			createUserWithEmailAndPassword(auth, this.email, this.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user
					// ...
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					// ..
				})
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
