export default {
	name: 'Logo',
	methods: {
		goToHome() {
			this.$router.push({
				name: this.PageNames.HOME,
			});
		},
	},
};
