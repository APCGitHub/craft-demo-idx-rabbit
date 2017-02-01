<template>
	<div class="load-more text-center">
		<a href="" @click.prevent="fetch" class="waves-effect">&nbsp;<i class="zmdi zmdi-refresh"></i>Load More</a>
	</div>
</template>

<script type="text/babel">
	export default {
		props: ['endpoint'],
		data() {
			return {

			};
		},
		methods: {
			fetch() {
				let url = this.endpoint;

				this.$http.get(url).then(res => {

				}).catch(err => {

				});
			}
		}
	}
</script>