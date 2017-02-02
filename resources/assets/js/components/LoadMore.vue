<template>
	<div class="load-more text-center">
		<a href="" @click.prevent="fetch" class="waves-effect">&nbsp;<i class="zmdi zmdi-refresh"></i>Load More</a>
	</div>
</template>

<script type="text/babel">
	export default {
		props: {
			searchId: Number,
			orderBy: String,
			endpoint: String, 
			startPage: {
				type: Number,
				default: 1
			},
			per: {
				type: Number,
				default: 12
			}
		},
		data() {
			return {
				page: this.startPage
			};
		},
		methods: {
			fetch() {
				let url = this.endpoint + '?';

				//If hitting search endpoint
				if(this.searchId) {
					url += `search_id=${this.searchId}&`;
				}

				//Build ODATA query
				let query = '';

				if(this.page) {
					query += `$skip=${this.page * this.per}`;
				}

				if(this.per) {
					if(this.page)
						query += '&';

					query += `$top=${this.per}`;
				}

				if(this.orderBy) {
					if(this.page && this.per) {
						query += '&';
					}

					query += `$orderby=${this.orderBy}`;
				}

				//Encode the query as it is a nested query param
				query = encodeURIComponent(query);

				query = `query=${query}`;

				url += query;

				this.$http.get(url).then(res => {
					let body = res.body;

					//increment the page counter by one
					this.page++;
					this.$emit('success', body);
				}).catch(err => {
					let body = err.body;
				});
			}
		}
	}
</script>