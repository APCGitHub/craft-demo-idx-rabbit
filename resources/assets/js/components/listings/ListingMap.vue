<template>
	<div id="listing-map"></div>
</template>

<script type="text/babel">
	import GoogleMapsLoader from 'google-maps';

	GoogleMapsLoader.KEY = 'AIzaSyAB7qyMHJF18W65Gy3qzOHAtv44N5n-e2Y';
	//GoogleMapsLoader.LIBRARIES = ['geometry'];

	export default {
		props: ['listing'],
		data() {
			return {
				map: {
					listing: null,
					instance: null,
					initialized: false,
					options: {
						zoom: 10,
						center: {
							lat: 39.991558,
							lng: -83.0126207
						},
						zoomControlOptions: {
			              	position: null
			          	},
			          	streetViewControlOptions: {
				            position: null
				        },
					}
				}
			};
		},
		created() {
			$bus.$on('showDetailMap', () => {
				if(this.map.initialized)
					return;

				if(this.listing.Latitude)
					this.map.options.center.lat = parseFloat(this.listing.Latitude);

				if(this.listing.Longitude)
					this.map.options.center.lng = parseFloat(this.listing.Longitude);

				Vue.nextTick(() => {
					GoogleMapsLoader.load((google) => {
						this.map.options.zoomControlOptions.position = google.maps.ControlPosition.RIGHT_CENTER;

						this.map.options.streetViewControlOptions.position = google.maps.ControlPosition.RIGHT_CENTER;

						this.map.instance = new google.maps.Map(this.$el, this.map.options);

						this.map.initialized = true;

						//NOTE: this line was very important for getting the
						//map to render for some reason
						google.maps.event.trigger(this.map.instance, 'resize');

						if(this.listing.Latitude && this.listing.Longitude)
							this.loadListingMarker(this.map.options.center);
					});
				});
			});
		},
		beforeDestroy() {
			GoogleMapsLoader.release(() => {});
		},
		methods: {
			loadListingMarker(coord = {}) {
				if(!this.map.listing) {
					this.map.listing = new google.maps.Marker({
						position: coord,
						animation: google.maps.Animation.DROP,
						map: this.map.instance
					});
				}
			}
		}
	}
</script>

<style scoped>
	#listing-map {
		height: 500px;
	}
</style>
