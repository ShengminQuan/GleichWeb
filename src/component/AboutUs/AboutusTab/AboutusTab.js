import VueTypes from 'vue-types';

export default {
	name: 'AboutusTab',
	props: {
		activeItem: VueTypes.number.def(0),
	},
	method: {
		switchTab(index) {
			this.activeItem = index;
		},
	},
};
