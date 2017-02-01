const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

elixir((mix) => {
	mix.copy('./bower_components/lightgallery/dist/fonts/', 'public/fonts')
		.copy('./bower_components/lightgallery/dist/img/', 'public/img');

	mix.styles([
			'./bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
			'./bower_components/animate.css/animate.min.css',
			'./bower_components/select2/dist/css/select2.min.css',
			'./bower_components/slick-carousel/slick/slick.css',
			'./bower_components/nouislider/distribute/nouislider.min.css',
			'./bower_components/rateYo/min/jquery.rateyo.min.css',
			'./bower_components/Waves/dist/waves.min.css',
			'./bower_components/lightgallery/dist/css/lightgallery.min.css',
			'./bower_components/lightgallery/dist/css/lg-transitions.min.css',
			'./bower_components/sweetalert/dist/sweetalert.css',
			'./bower_components/sweetalert2/dist/sweetalert2.min.css',
			'./bower_components/wow/css/site.css'
		], 'resources/assets/css/build/vendor.css')
		.less('app.less', 'resources/assets/css/build/app.css')
		.styles([
			'resources/assets/css/build/vendor.css',
			'resources/assets/css/build/app.css'
		], 'public/css/app.css')
		.webpack('app.js');
});