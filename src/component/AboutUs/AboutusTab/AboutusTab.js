import MemberTab from './MemberTab/MemberTab';

export default {
	name: 'AboutusTab',
	components: {
		MemberTab,
	},
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
