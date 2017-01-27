Vue.component('sideSearch', {
	props: [],
	data() {
		return {
			price: {
				min: 0,
				max: 10000000
			},
			footprint: {
				min: 0,
				max: 10000
			},
			lot: {
				min: 0,
				max: 100000
			}
		}
	},
	methods: {
		priceChanged(val) {
			
		},
		footprintChanged(val) {

		},
		lotChanged(val) {
			
		}
	}
});