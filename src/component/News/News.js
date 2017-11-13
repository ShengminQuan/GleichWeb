import { mapGetters } from 'vuex';
import NewsItem from './NewsItem/NewsItem';

export default {
	name: 'News',
	components: {
		NewsItem,
	},
	computed: {
		...mapGetters('news', ['data']),
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				// eslint-disable-next-line
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
