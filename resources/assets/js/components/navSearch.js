Vue.component('navSearch', {
	data() {
		return {
			price: {
				min: 0,
				max: 10000000
			},
			footprint: {
				min: 0,
				max: 10000
			}
		};
	},
	created() {
		$(document).ready(() => {
			$('#nav-search').submit((e) => {
				e.preventDefault();
				e.stopImmediatePropagation();

				$('#property_bedrooms_total').val($('input[name="advanced-search-beds"]:checked').val());

				$('#advanced-search-baths').val($('input[name="advanced-search-baths"]:checked').val());

				$('#nav-search')[0].submit();
			});
		});
	},
	methods: {
		priceRangeChanged(min, max) {
			this.price.min = min;
			this.price.max = max;

			$('#property_price_start').val(this.price.min);
			$('#property_price_end').val(this.price.max);
		},
		footprintRangeChanged(min, max) {
			this.footprint.min = min;
			this.footprint.max = max;

			$('#property_area_lower').val(this.footprint.min);
			$('#property_area_upper').val(this.footprint.max);
		}
	}
});