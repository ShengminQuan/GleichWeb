import { mapGetters } from 'vuex';
import NewsItem from './NewsItem/NewsItem';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
require('swiper/dist/css/swiper.css');

export default {
	name: 'News',
	components: {
		NewsItem,
		swiper,
		swiperSlide,
	},
	computed: {
		...mapGetters('news', ['data']),
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationBulletRender(swiper, index, className) {
					return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`;
				},
				slidesPerView: 4,
				slidesPerGroup: 4,
				paginationClickable: true,
				spaceBetween: 20,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			},
		};
	},
};
