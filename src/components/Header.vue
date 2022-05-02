<template>
	<div class="header">
		<div class="container">
			<div class="logo-wrapper">
				<router-link to="/"
					><img :src="require('@/assets/logo.png')" />
					<img :src="require('@/assets/star.png')" alt="" class="star"
				/></router-link>
			</div>
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
.logo-wrapper {
	position: relative;
}
.star {
	width: 250px;
	position: absolute;
	right: 15px;
	top: -10px;
	z-index: -1;
	animation: rotateStar 5s infinite linear;
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
@keyframes rotateStar {
	0% {
		transform: scale(1) rotate(0);
	}
	50% {
		transform: scale(0.5) rotate(180deg);
	}
	100% {
		transform: scale(1) rotate(360deg);
	}
}
</style>
