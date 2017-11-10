import Logo from '../Logo/Logo';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default {
	name: 'MenuComponent',
	components: {
		Logo,
		LanguageSwitcher,
	},
	data() {
		return {
			shownSubMenu: false,
		};
	},
	methods: {
		switchSubMneu() {
			this.shownSubMenu = !this.shownSubMenu;
		},
	},
};
