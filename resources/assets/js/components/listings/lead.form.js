Vue.component('leadForm', {
	component: [],
	data() {
		return {
			http: {
				lead: {
					success: false,
					sending: false
				}
			}
		};
	},
	created() {
		$(document).ready(() => {
			$('#lead-form').submit((e) => {
				e.preventDefault();
				e.stopImmediatePropagation();

				this.submit();
			});
		});
	},
	methods: {
		submit() {
			let data = $('#lead-form').serializeArray();

			this.http.lead.sending = true;

			let form = {};

			for(let i = 0; i < data.length; i++) {
				form[data[i].name] = data[i].value;
			}

			this.$http.post('/actions/idxRabbit/leads/sendLeadAjax', form).then(res => {
				let body = res.body;
				this.http.lead.sending = false;
				this.http.lead.success = true;

				setTimeout(() => {
					this.http.lead.success = false;
				}, 1500);			
			}).catch(err => {
				let body = err.body;
				this.http.lead.sending = false;
				
			});
		}
	}
});
