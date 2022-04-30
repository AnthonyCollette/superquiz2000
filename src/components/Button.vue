<template>
	<button :class="variant.class + ' btn'">
		{{ variant.text }}
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		variant: Object,
	},
}
</script>

<style lang="scss">
@import '@/scss/main.scss';
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
}
</style>
