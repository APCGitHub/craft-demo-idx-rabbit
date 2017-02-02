Vue.component('listingResults', {
	data() {
		return {
			listings: [],
			show_load_more: true
		};
	},
	methods: {
		appendListings(data = []) {
			if(data) {
				if(data.length)
					this.listings.push.apply(this.listings, data);
				else
					this.show_load_more = false;
			}
		}
	}
});