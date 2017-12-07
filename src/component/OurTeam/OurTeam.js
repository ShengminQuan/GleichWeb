export default {
	name: 'OurTeam',
	computed: {
		swiper() {
			return this.$refs.memberSwiper.swiper;
		},
	},
	data() {
		return {
			activeItem: 0,
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				spaceBetween: 20,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			},
			notNextTick: true,
		};
	},
	methods: {
		swipeSlider(index) {
			this.activeItem = index;
			this.swiper.slideTo(index);
		},
	},
};
