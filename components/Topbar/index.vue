<template>
	<div class="topbar">
		<div class="topbar-history">
			<div class="topbar-history__title title">
				{{ title }}
			</div>
			<div v-if="history"  class="topbar-history__list">
				<slot ref="history" name="history">
					
				</slot>
				<span ref="active" class="active">{{ title }}</span>
			</div>
		</div>
		<slot name="panel"></slot>
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			title: '',
			history: true
		},
		computed : {

		}
	}
</script>