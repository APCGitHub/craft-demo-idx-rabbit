Vue.component('listingDetails', {
	data() {
		return {};
	},
	mounted() {
		$('a[href="#detail-media-map"').on('shown.bs.tab', function (e) {
			$bus.$emit('showDetailMap');
		});
	}
});