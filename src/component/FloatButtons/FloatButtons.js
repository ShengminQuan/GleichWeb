export default {
	name: 'FloatButtons',
	computed: {
		marginLeft() {
			return window.innerWidth > 940 ? (window.innerWidth - 940) / 2 : 0;
		},
	},
	data() {
		return {
			enableFixed: false,
		};
	},
	methods: {
		detectScrolling() {
			const scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			this.enableFixed = scroll > 200;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.detectScrolling);
	},
};
