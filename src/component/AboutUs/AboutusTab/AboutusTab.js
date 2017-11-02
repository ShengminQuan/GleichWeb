export default {
	name: 'AboutusTab',
	data() {
		return {
			activeItem: 0,
			currentAboutItem: 0,
		};
	},
	methods: {
		switchTab(index) {
			this.activeItem = index;
		},
		switchAboutTab(index) {
			this.currentAboutItem = index;
		},
	},
};
