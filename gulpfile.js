const elixir = require('laravel-elixir');

elixir((mix) => {
	mix.styles([
			'./bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
			'./bower_components/animate.css/animate.min.css',
			'./bower_components/select2/dist/css/select2.min.css',
			'./bower_components/slick-carousel/slick/slick.css',
			'./bower_components/nouislider/distribute/nouislider.min.css',
			'./bower_components/rateYo/min/jquery.rateyo.min.css',
			'./bower_components/Waves/dist/waves.min.css'
		], 'resources/assets/css/build/vendor.css')
		.less('app.less', 'resources/assets/css/build/app.css')
		.styles([
			'resources/assets/css/build/vendor.css',
			'resources/assets/css/build/app.css'
		], 'public/css/app.css')
		.webpack('app.js');
});