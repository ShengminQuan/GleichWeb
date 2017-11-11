import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { getValue } from 'util/injector';
import { mapState, mapActions } from 'vuex';
import debounce from 'lodash/debounce';
import { CONFIG_MANAGER } from '../../../data/Injectables';
import { VariableNames } from '../../../data/enum/configNames';
import { UserInterfaceMutationTypes } from '../../../store/module/userInterface/index';

require('swiper/dist/css/swiper.css');

export default {
	name: 'BusinessSlider',
	components: {
		swiper,
		swiperSlide,
	},
	computed: {
		...mapState('userInterface', ['businessActiveItem']),
		swiper() {
			return this.$refs.businessSwiper.swiper;
		},
	},
	watch: {
		swiperPreView() {
			this.resizeSlider();
		},
		businessActiveItem() {
			this.swiper.slideTo(this.businessActiveItem);
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
