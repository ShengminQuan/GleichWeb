import { debounce } from 'lodash';
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
			aboutUsOffsetTop: 0,
			foundationOffsetTop: 0,
			businessOffsetTop: 0,
			scrollTop: 0,
			activeItem: 0,
		};
	},
	methods: {
		switchSubMneu() {
			this.shownSubMenu = !this.shownSubMenu;
		},
		handleScroll() {
			this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (this.scrollTop > this.businessOffsetTop - 200) {
				this.activeItem = 3;
			} else if (this.scrollTop > this.foundationOffsetTop - 200) {
				this.activeItem = 2;
			} else if (this.scrollTop > this.aboutUsOffsetTop - 200) {
				this.activeItem = 1;
			}
		},
		getOffset() {
			this.aboutUsOffsetTop = document.getElementById('about-us').offsetTop;
			this.foundationOffsetTop = document.getElementById('foundation').offsetTop;
			this.businessOffsetTop = document.getElementById('business').offsetTop;
		},
	},
	mounted() {
		setTimeout(() => this.getOffset(), 500);
		window.addEventListener('scroll', debounce(this.handleScroll, 400));
		window.addEventListener('resize', debounce(this.getOffset, 400));
	},
	beforeDestroy() {
		window.removeEventListener('scroll', debounce(this.handleResize, 400));
		window.removeEventListener('resize', debounce(this.getOffset, 400));
	},
};
