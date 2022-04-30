<template>
	<div class="app">
		<div class="container">
			<HomeButton />
			<router-view v-slot="{ Component }">
				<transition
					name="custom-classes-transition"
					enter-active-class="slide-in"
					leave-active-class="slide-out"
					mode="out-in"
				>
					<component :is="Component"></component>
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script>
import HomeButton from './components/HomeButton'
export default {
	components: {
		HomeButton,
	},
}
</script>
<style lang="scss">
@font-face {
	font-family: 'KyooshiGothic';
	src: url('./fonts/KyooshiGothic.ttf');
}
@import '@/scss/main.scss';
* {
	box-sizing: border-box;
	margin: 0;
	transition: all 0.4s ease-in-out;
}
html {
	scroll-behavior: smooth;
}
body {
	font-family: $font-001;
	background-color: $color-006;
}
button {
	cursor: pointer;
}
.container {
	width: 1400px;
	margin: 100px auto;
}
li {
	list-style: none;
}

a {
	text-decoration: none;
	color: $color-002;
}

h1 {
	color: $color-008;
	font-size: $font-xxxl;
	text-align: center;
}

p {
	font-size: $font-xl;
	color: $color-007;
}

.flex-wrapper {
	display: flex;
}
@keyframes slide {
	0% {
		transform: translateX(0);
		opacity: 1;
	}
	100% {
		transform: translateX(-50px);
		opacity: 0;
	}
}
.slide-in {
	animation: slide;
	animation-duration: 0.5s;
	animation-direction: reverse;
}
.slide-out {
	animation: slide;
	animation-duration: 0.5s;
}

//BUTTONS

.light-blue {
	background-color: $color-007;
	color: $color-003;
	border: 2px solid $color-007;
	&:hover {
		background-color: $color-003;
		color: $color-007;
	}
}
.yellow {
	background-color: $color-004;
	color: $color-008;
	border: 2px solid $color-004;
	&:hover {
		background-color: $color-008;
		color: $color-004;
	}
}
.btn {
	padding: 10px 0;
	border-radius: 20px;
	font-size: $font-lg;
	font-family: $font-001;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
</style>
