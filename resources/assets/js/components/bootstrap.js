/* Inline template logics */
require('./navSearch');
require('./listings/listings.show');
require('./actionHeader');
require('./sideSearch');

/* Vue components */
Vue.component('listingMap', require('./listings/ListingMap.vue'));
Vue.component('listingFav', require('./listings/ListingFav.vue'));
Vue.component('listingsMap', require('./listings/ListingsMap.vue'));
Vue.component('slider', require('./form/Slider.vue'));
