<template>
	<div v-if="did_like">
		<i class="zmdi zmdi-favorite mdc-text-red-500"></i>
	</div>
	<div v-else>
		<i @click="favorite" v-show="!http.faving" class="zmdi zmdi-favorite-outline f-20 waves-effect"></i>
		<i v-show="http.faving" class="zmdi zmdi-refresh zmdi-hc-spin"></i>
	</div>
</template>

<script type="text/babel">
	export default {
		props: ['listingId', 'liked', 'url'],
		data() {
			return {
				did_like: this.liked,
				http: {
					faving: false
				}
			};
		},
		watch: {
			liked(value) {
				this.did_like = value;
			}
		},
		methods: {
			favorite() {
				let data = {
					listing_id: this.listingId,
					listing_url: this.url
				};

				this.http.faving = true;

				this.$http.post('/actions/idxRabbit/prospects/favoriteListingAjax', data).then(res => {
					this.http.faving = false;
					this.did_like = true;
				}).catch(err => {
					this.http.faving = false;
					this.did_like = false;
				});
			}
		}
	}
</script>