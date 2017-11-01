import VueTypes from 'vue-types';

export default {
	name: 'NewsItem',
	props: {
		news: VueTypes.object,
	},
	computed: {
		currentLanguage() {
			return this.$store.getters.currentLanguage;
		},
	},
};
