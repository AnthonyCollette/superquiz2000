<template>
	<router-link to="/" class="home-btn">
		<i class="fa-solid fa-house"></i>
	</router-link>
</template>

<script>
export default {
	name: 'HomeButton',
}
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';
.home-btn {
	background-color: $color-001;
	padding: 10px;
	border-radius: 50%;
	width: fit-content;
	width: -moz-fit-content;
	aspect-ratio: 1/1;
	transition-duration: 0.2s;
	cursor: pointer;
	position: fixed;
	bottom: 50px;
	right: 50px;
	&:hover {
		background-color: $color-004;
		i {
			color: $color-001;
		}
	}
	i {
		color: $color-004;
	}
}
</style>
