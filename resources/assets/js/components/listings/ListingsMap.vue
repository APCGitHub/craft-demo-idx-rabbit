<template>
	<div id="listings-map"></div>
</template>

<script type="text/babel">
	import GoogleMapsLoader from 'google-maps';

	export default {
		props: ['listings'],
		data() {
			return {
				map: {
					markers: [],
					instance: null,
					initialized: false,
					options: {
						zoom: 10,
						center: {
							lat: 39.991558,
							lng: -83.0126207
						}
					}
				}
			};
		},
		mounted() {
			GoogleMapsLoader.load((google) => {
				Vue.nextTick(() => {
					this.map.instance = new google.maps.Map(this.$el, this.map.options);

					this.map.initialized = true;

					this.plotListings();
				});
			});
		},
		beforeDestroy() {
			GoogleMapsLoader.release(() => {});
		},
		methods: {
			plotListings() {
				let bounds = new google.maps.LatLngBounds();

				for(let i = 0; i < this.listings.length; i++){
					let l = this.listings[i];

					if(l.Latitude && l.Longitude) {
						let m = new google.maps.Marker({
							position: {lat: parseFloat(l.Latitude), lng: parseFloat(l.Longitude)},
							animation: google.maps.Animation.DROP,
							map: this.map.instance
						});

						bounds.extend(m.getPosition());

						this.map.markers.push(m);
					}
				}

				this.map.instance.fitBounds(bounds);
			}
		}
	}
</script>

<style scoped>
	#listings-map {
		height: 600px;
	}
</style>