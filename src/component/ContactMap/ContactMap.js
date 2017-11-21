import { loaded } from 'vue2-google-maps';

export default {
	name: 'ContactMap',
	data() {
		return {
			googleEnabled: false,
		};
	},
	mounted() {
		loaded.then(() => {
			this.googleEnabled = true;
		});
	},
};
