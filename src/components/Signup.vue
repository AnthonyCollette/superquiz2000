<template>
	<div class="signup">
		<div class="container">
			<h1>S'inscrire</h1>
			<Form :isAuth="isAuth" />
			{{ user.name }}
			{{ user.email }}
		</div>
	</div>
</template>

<script>
import Form from './Form.vue'

export default {
	name: 'Signup',
	components: {
		Form,
	},
	data() {
		return {
			isAuth: false,
			user: {
				name: '',
				email: '',
			},
		}
	},
}
</script>

<style lang="sass" scoped></style>
