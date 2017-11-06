import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');

export default {
	name: 'Foundation',
	components: {
		swiper,
		swiperSlide,
	},
	computed: {
		paddingLeft() {
			return window.innerWidth > 940 ? (window.innerWidth - 940) / 2 : 0;
		},
		swiperContentWidth() {
			return window.innerWidth > 940 ? 940 - 40 - 245 : window.innerWidth - 40 - 245;
		},
		swiperOption() {
			return {
				pagination: '.swiper-pagination',
				spaceBetween: 0,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				slidesPerView: 'auto',
				paginationClickable: true,
				setWrapperSize: true,
				width: this.swiperContentWidth,
			};
		},
		swiper() {
			return this.$refs.foundationSwiper.swiper;
		},
	},
	data() {
		return {
			notNextTick: true,
			currentSlider: 0,
		};
	},
	methods: {
		goToSlider(index) {
			this.swiper.slideTo(index);
			this.currentSlider = index;
		},
	},
};
