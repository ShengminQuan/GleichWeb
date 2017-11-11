import { swiper, swiperSlide } from 'vue-awesome-swiper';
import debounce from 'lodash/debounce';
import { getValue } from 'util/injector';
import VueScrollbar from 'vue2-scrollbar';
import { CONFIG_MANAGER } from '../../../../data/Injectables';
import { VariableNames } from '../../../../data/enum/configNames';

require('vue2-scrollbar/dist/style/vue2-scrollbar.css');
require('swiper/dist/css/swiper.css');

export default {
	name: 'MemberTab',
	components: {
		swiper,
		swiperSlide,
		VueScrollbar,
	},
	computed: {
		swiper() {
			return this.$refs.memberSwiper.swiper;
		},
	},
	watch: {
		swiperPreView() {
			this.resizeSlider();
		},
	},
	data() {
		return {
			swiperPreView: 3,
			swiperOption: {
				pagination: '.swiper-pagination',
				slidesPerView: this.swiperPreView,
				slidesPerGroup: this.swiperPreView,
				paginationClickable: true,
				spaceBetween: 20,
			},
			notNextTick: true,
		};
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
	methods: {
		handleResize() {
			/* eslint-disable max-len */
			this.swiperPreView =
				document.body.clientWidth > getValue(CONFIG_MANAGER).getVariable(VariableNames.BOUNDARY_MOBILE_DESKTOP) ? 3 : 1;
		},
		resizeSlider() {
			this.swiper.params.slidesPerView = this.swiperPreView;
			this.swiper.update();
		},
	},
	beforeDestroy() {
		window.addEventListener('resize', debounce(this.handleResize));
	},
};
