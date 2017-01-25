/* Inline template logics */
require('./navSearch');
require('./listings/listings.show');

/* Vue components */
Vue.component('listingMap', require('./listings/ListingMap.vue'));
Vue.component('listingFav', require('./listings/ListingFav.vue'));