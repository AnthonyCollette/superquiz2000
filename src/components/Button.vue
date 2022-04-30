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

<style lang="scss"></style>
