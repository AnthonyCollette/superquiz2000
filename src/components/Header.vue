<template>
	<div class="header">
		<div class="container">
			<router-link to="/">Super Quiz 2000</router-link>
			<p class="slogan">Le jeu qu'il est trop bien !</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 100px;
}
a {
	color: $color-008;
	font-size: $font-xxxl;
	text-align: center;
}
.slogan {
	font-style: italic;
	font-size: $font-xl;
}
</style>
