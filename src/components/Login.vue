<template>
	<div class="login">
		<div class="container">
			<h1>Se connecter</h1>
			<Form :isAuth="isAuth" />
		</div>
	</div>
</template>

<script>
import Form from './Form.vue'
export default {
	name: 'Login',
	components: {
		Form,
	},
	data() {
		return {
			isAuth: true,
		}
	},
}
</script>

<style lang="scss"></style>
