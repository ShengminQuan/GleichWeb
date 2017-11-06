import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');

export default {
	name: 'BusinessSlider',
	components: {
		swiper,
		swiperSlide,
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: 3,
				slidesPerGroup: 3,
				paginationClickable: true,
				spaceBetween: 20,
			},
		};
	},
};
