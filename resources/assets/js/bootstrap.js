/* jQuery */
window.$ = window.jQuery = require('jquery');

/* Vue js */
window.Vue = require('vue');
let VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', craft.csrfTokenValue);

    next();
});

/* Sweetalert 2*/
window.swal = require('sweetalert2');

/* Bootstrap js */
require('bootstrap');

/* Waves js */
require('node-waves');

/* Select2 */
require('select2');

/* Slick carousel */
require('slick-carousel');

/* nouislider */
window.noUiSlider = require('nouislider');

/* Theme scripts */
require('./scripts/bootstrap');

/* Site wide functions */
window.onload = () => {
    /*---------------------------------------------------------
        Page Loader
        - Using javascript to reduce jquery lib loading time
    ----------------------------------------------------------*/
    let fade = (element) => {
        var op = 1;  // initial opacity
        var timer = setInterval(() => {
            if (op <= 0.1){
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 10);
    }

    setTimeout(() => {
        fade(document.getElementById('page-loader'));
    }, 200);
};