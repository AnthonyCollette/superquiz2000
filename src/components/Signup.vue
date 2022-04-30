<template>
	<div class="signup">
		<div class="container">
			<h1>S'inscrire</h1>
			<Form />
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
}
</script>

<style lang="sass" scoped></style>
