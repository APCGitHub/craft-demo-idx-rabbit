import URI from 'urijs';

Vue.component('actionHeader', {
	props: [],
	data() {
		return {
			current_layout: null,
			layouts: [
				{
					name: 'grid',
					icon: 'apps'
				},
				{
					name: 'list',
					icon: 'view-list'
				},
				{
					name: 'map',
					icon: 'map'
				}
			],
			query: null,
			uri: null
		};
	},
	created() {
		this.uri = new URI(window.location.href);

		if(this.uri.hasQuery('layout')) {
			this.current_layout = this.layouts.filter((l) => {
				return this.uri.hasQuery('layout', l.name);
			});

			if(this.current_layout.length) {
				this.current_layout = this.current_layout[0];
			}
		}
	},
	mounted() {
		
	},
	methods: {
		href(layout) {
			let q = this.uri.search(true);
			q['layout'] = layout.name

			return new URI(this.uri).search(q).toString();
		}
	}
});