/* jQuery */
window.$ = window.jQuery = require('jquery');

/* Vue js */
window.Vue = require('vue');
let VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Craft.csrfTokenValue);

    let body = request.body;
    body[Craft.csrfTokenName] = Craft.csrfTokenValue;
    request.body = body;

    next();
});

let accounting = require('accounting');

Vue.prototype.filters = {
	money(value, symbol, decimals, dec_symb, thous_symb) {
		value = parseFloat(value);

		return accounting.formatMoney(value, symbol, decimals, dec_symb, thous_symb);
	}
};

Vue.http.options.emulateJSON = true;

window.$bus = new Vue();

/* Sweetalert 2*/
window.swal = require('sweetalert2');

/* Bootstrap js */
require('bootstrap');

/* Select2 */
require('select2');

/* Slick carousel */
require('slick-carousel');

/* Lightgallery */
require('lightgallery');

/* nouislider */
//window.noUiSlider = require('nouislider');

/* Theme scripts */
require('./scripts/bootstrap');
require('./components/bootstrap');
