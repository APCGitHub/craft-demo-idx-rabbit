/* Inline template logics */
require('./navSearch');
require('./actionHeader');
require('./sideSearch');


/* Vue components */
Vue.component('slider', require('./form/Slider.vue'));
Vue.component('loadMore', require('./LoadMore.vue'));

/* Pull in other directories */
require('./listings/bootstrap');
