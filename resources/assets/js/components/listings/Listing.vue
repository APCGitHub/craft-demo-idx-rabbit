<template>
	<div v-if="type === 'grid'" class="listings-grid__item wow zoomIn clickable material-hover" data-wow-duration="0.5s">
	    <a :href="'/listings/' + listing.ListingId">
	        <div class="listings-grid__main">
	            <img src="https://placeholdit.imgix.net/~text?&w=400&h=266" alt="">
	            <div class="listings-grid__price">{{ filters.money(listing.ListPrice, '$', 0) }}</div>
	        </div>

	        <div class="listings-grid__body">
	            <small>{{ fullAddress }}</small>
	            <h5>{{listing.PublicRemarks}}</h5>
	        </div>

	        <ul class="listings-grid__attrs">
	            <li>
	                <i class="listings-grid__icon listings-grid__icon--bed"></i>
	                {{listing.BedroomsTotal}}
	            </li>
	            <li>
	                <i class="listings-grid__icon listings-grid__icon--bath"></i>
	                {{listing.BathroomsFull}}
	            </li>
	            <li>
	                <i class="listings-grid__icon listings-grid__icon--parking"></i>
	                {{listing.GarageSpaces}}
	            </li>
	        </ul>
	    </a>

	    <div class="actions listings-grid__favorite">
	        <template v-if="hasSocial">
			    <listing-fav :url="url" :listing-id="listing.ListingId" :liked="liked"></listing-fav>
			</template>
			<template v-else>
			    <div data-toggle="modal" data-target="#logInModal">
			        <i class="zmdi zmdi-sign-in"></i>
			    </div>
			</template>
	    </div>
	</div>

	<div v-else class="listings-grid__item clickable wow flipInX material-hover" data-wow-offset="50" data-wow-duration="1s">
	    <a :href="'/listings/' + listing.ListingId" class="media">
	        <div class="listings-grid__main pull-left">
	            <img src="https://placeholdit.imgix.net/~text?&w=400&h=266" alt="">
	            <div class="listings-grid__price">{{ filters.money(listing.ListPrice, '$', 0) }}</div>
	        </div>

	        <div class="media-body">
	            <div class="listings-grid__body">
		            <small>{{ fullAddress }}</small>
		            <h5>{{listing.PublicRemarks}}</h5>
	            </div>
	            <ul class="listings-grid__attrs">
	                <li>
		                <i class="listings-grid__icon listings-grid__icon--bed"></i>
		                {{listing.BedroomsTotal}}
		            </li>
		            <li>
		                <i class="listings-grid__icon listings-grid__icon--bath"></i>
		                {{listing.BathroomsFull}}
		            </li>
		            <li>
		                <i class="listings-grid__icon listings-grid__icon--parking"></i>
		                {{listing.GarageSpaces}}
		            </li>
	            </ul>
	        </div>
	    </a>

	    <div class="actions listings-grid__favorite">
	        <template v-if="hasSocial">
			    <listing-fav :url="url" :listing-id="listing.ListingId" :liked="liked"></listing-fav>
			</template>
			<template v-else>
			    <div data-toggle="modal" data-target="#logInModal">
			        <i class="zmdi zmdi-sign-in"></i>
			    </div>
			</template>
	    </div>
	</div>
</template>

<script type="text/babel">
	import ListingService from '../../services/ListingService';

	export default {
		props: {
			liked: {
				type: Boolean,
				default: false
			},
			hasSocial: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: 'grid',
			},
			listing: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		data() {
			return {};
		},
		computed: {
			fullAddress() {
				return ListingService.fullAddress(this.listing);
			},
			url() {
				let url = Craft.siteUrl;

				if(url.slice(-1) !== '/')
					url += '/';

				url += `listings/${this.listing.ListingId}`;

				return url;
			}
		}
	}
</script>