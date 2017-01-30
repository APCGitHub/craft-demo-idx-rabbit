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
	created() {
		$(document).ready(() => {
			$('#advanced-side-search-form').submit((e) => {
				e.preventDefault();
				e.stopImmediatePropagation();

				$('#advanced-side-search-form #property_bedrooms_total').val($('#advanced-side-search-form input[name="advanced-search-beds"]:checked').val());
				$('#advanced-side-search-form #property_baths_full').val($('#advanced-side-search-form input[name="advanced-search-baths"]:checked').val());
				$('#advanced-side-search-form #property_garage_spaces').val($('#advanced-side-search-form input[name="advanced-search-garage"]:checked').val());
				$('#advanced-side-search-form #property_year_built').val($('#advanced-side-search-form #property-year-built').val());

				$('#advanced-side-search-form')[0].submit();
			});
		});
	},
	methods: {
		priceChanged(min, max) {
			let ps = this.$el.querySelector('#property_price_start');
			let pu = this.$el.querySelector('#property_price_end');

			ps.value = min;
			pu.value = max;
		},
		footprintChanged(min, max) {
			let pu = this.$el.querySelector('#property_area_upper');
			let pl = this.$el.querySelector('#property_area_lower');

			pu.value = min;
			pl.value = max;
		},
		lotChanged(min, max) {
			let pu = this.$el.querySelector('#property_lot_upper');
			let pl = this.$el.querySelector('#property_lot_lower');

			pu.value = min;
			pl.value = max;
		}
	}
});