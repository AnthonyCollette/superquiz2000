<template>
	<div class="header">
		<div class="container">
			<router-link to="/"
				><img :src="require('@/assets/logo.png')"
			/></router-link>
			<p class="slogan">Le jeu qu'il est trop bien !</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto 50px;
}
a {
	color: $color-008;
	font-size: $font-xxxl;
	text-align: center;
}
img {
	width: 600px;
}
.slogan {
	font-style: italic;
	font-size: $font-xl;
}
</style>
