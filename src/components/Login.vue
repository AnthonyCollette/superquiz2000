<template>
	<div class="login">
		<div class="container">
			<h1>Se connecter</h1>
			<Form />
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
}
</script>

<style lang="scss"></style>
