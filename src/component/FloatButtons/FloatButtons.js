import debounce from 'lodash/debounce';

export default {
	name: 'FloatButtons',
	data() {
		return {
			enableFixed: false,
			marginLeft: window.innerWidth > 940 ? (window.innerWidth - 940) / 2 : 0,
		};
	},
	methods: {
		detectScrolling() {
			const scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			this.enableFixed = scroll > 800 - window.innerHeight * 0.8;
		},
		handleResize() {
			this.marginLeft = window.innerWidth > 940 ? (window.innerWidth - 940) / 2 : 0;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.detectScrolling);
		window.addEventListener('resize', debounce(this.handleResize, 400));
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.detectScrolling);
		window.removeEventListener('resize', debounce(this.handleResize, 400));
	},
};
