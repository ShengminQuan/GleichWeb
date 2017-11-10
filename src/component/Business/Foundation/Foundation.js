import { swiper, swiperSlide } from 'vue-awesome-swiper';
import debounce from 'lodash/debounce';

require('swiper/dist/css/swiper.css');

export default {
	name: 'Foundation',
	components: {
		swiper,
		swiperSlide,
	},
	computed: {
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
			paddingLeft: 0,
			swiperContentWidth: 0,
			notNextTick: true,
			currentSlider: 0,
		};
	},
	methods: {
		goToSlider(index) {
			this.swiper.slideTo(index);
			this.currentSlider = index;
		},
		handleResize() {
			const width = document.body.clientWidth;
			/* eslint-disable max-len */
			if (width > 940) {
				this.swiperContentWidth = 940 - 40 - 245;
			} else if (width > 767 && width < 939) {
				this.swiperContentWidth = width - 40 - 245;
			} else {
				this.swiperContentWidth = width;
			}
			this.paddingLeft = window.innerWidth > 940 ? (window.innerWidth - 940) / 2 : 0;
			console.log(this.swiperContentWidth);
		},
		resizeSlider() {
			this.swiper.params.width = this.swiperContentWidth;
			this.swiper.update();
		},
	},
	mounted() {
		this.handleResize();
		this.resizeSlider();
		// _.debounce 是一个通过 lodash 限制操作频率的函数。
		window.addEventListener(
			'resize',
			debounce(() => {
				this.handleResize();
			}, 400),
		);
	},
	beforeDestroy() {
		window.addEventListener('resize', debounce(this.handleResize));
	},
};
