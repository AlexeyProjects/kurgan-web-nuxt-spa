<template>
	<Nuxt />
  
</template>

<style>	

</style>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'default',
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				'nav/GET_NAV'
			])
		},
		mounted() {
			this.$store.dispatch('nav/GET_NAV')
		}
	}
</script>