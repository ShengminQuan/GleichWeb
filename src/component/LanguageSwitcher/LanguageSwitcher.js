import { events } from 'vue-i18n-manager';

export default {
	name: 'LanguageSwitcher',
	computed: {
		currentLanguage() {
			return this.$store.getters.currentLanguage;
		},
		avaliableLanguage() {
			return this.$store.getters.availableLanguages;
		},
	},
	methods: {
		switchLanguage(value) {
			this.$store.dispatch(events.SET_LANGUAGE, value);
		},
	},
};
