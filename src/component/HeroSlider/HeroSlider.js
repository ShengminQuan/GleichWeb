export default {
	name: 'HeroSlider',
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				speed: 1000,
				autoplay: 3000,
				effect: 'fade',
			},
		};
	},
};
