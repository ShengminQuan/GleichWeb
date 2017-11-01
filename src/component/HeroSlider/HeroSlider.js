import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');

export default {
	name: 'HeroSlider',
	components: {
		swiper,
		swiperSlide,
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationClickable: true,
			},
		};
	},
};
