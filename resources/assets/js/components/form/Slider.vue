<template>
	<div>
		<div class="input-slider-values clearfix">
	        <div class="pull-left">
	        	<span v-if="prefix">{{prefix}}</span>
	        	<span>{{filters.money(c_min, '', 0)}}</span>
	        </div>
	        <div class="pull-right">
	        	<span v-if="prefix">{{prefix}}</span>
	        	<span>{{filters.money(c_max, '', 0)}}</span>
	        </div>
	    </div>
	    <div id="range"></div>
	</div>
</template>

<script type="text/babel">
	import noUiSlider from 'nouislider';

	export default {
		props: ['prefix', 'max', 'min', 'step'],
		data() {
			return {
				c_min: this.min,
				c_max: this.max
			};
		},
		mounted() {
			let range = this.$el.querySelector('#range');

			let slider = noUiSlider.create (range, {
	            start: [this.min, this.max],
	            connect: true,
	            step: this.step ? parseInt(this.step) : 1,
	            range: {
	                'min': parseFloat(this.min),
	                'max': parseFloat(this.max)
	            }
	        });

	        range.noUiSlider.on('update', ( values, handle ) => {
	            if(handle == 0)
	            	this.c_min = Math.ceil(values[handle]);

	            if(handle == 1)
	            	this.c_max = Math.ceil(values[handle]);

	            this.$emit('changed', this.c_min, this.c_max);
	        });
		}
	}
</script>