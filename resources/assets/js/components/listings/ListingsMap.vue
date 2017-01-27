<template>
	<div id="listings-map"></div>
</template>

<script type="text/babel">
	import GoogleMapsLoader from 'google-maps';
	import ListingService from '../../services/ListingService';

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

						let c = `<h4>${this.filters.money(l.ListPrice, '$', 0)}</h4>
							<p>${ListingService.address(l)}</p>
							<ul class="listings-grid__attrs">
								<li>
									<i class="listings-grid__icon listings-grid__icon--bed"></i>&nbsp;${l.BedroomsTotal || 0}
								</li>
								<li>
									<i class="listings-grid__icon listings-grid__icon--bath"></i>&nbsp;${l.BathroomsFull || 0}
								</li>
								<li>
									<i class="listings-grid__icon listings-grid__icon--parking"></i>&nbsp;${l.GarageSpaces || 0}
								</li>
							</ul>
							<div class="text-center m-b-5">
								<a href="/listings/${l.ListingId}" class="btn btn-info waves-effect">Details</a>
							</div>
						`;

						let info = new google.maps.InfoWindow({
							content: c
						});

						google.maps.event.addListener(m, 'click', ((marker, info_window, index) => {
							return () => {
								info_window.open(this.map.instance, marker);
							};
						})(m, info, i));

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