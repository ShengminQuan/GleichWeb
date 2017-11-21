import MenuComponent from '../../component/MenuComponent/MenuComponent';
import HeroSlider from '../../component/HeroSlider/HeroSlider';
import ContactUs from '../../component/ContactUs/ContactUs';
import News from '../../component/News/News';
import AboutUs from '../../component/AboutUs/AboutUs';
import Business from '../../component/Business/Business';
import FooterComponent from '../../component/FooterComponent/FooterComponent';
import FloatButtons from '../../component/FloatButtons/FloatButtons';
import AboutGleich from '../../component/AboutGleich/AboutGleich';

export default {
	name: 'HomePage',
	components: {
		MenuComponent,
		HeroSlider,
		AboutGleich,
		AboutUs,
		Business,
		ContactUs,
		News,
		FooterComponent,
		FloatButtons,
	},
	methods: {
		handleScroll() {
			const parallax = document.getElementById('parallax-bg');
			let yPos = window.pageYOffset / 5;
			yPos = -yPos;
			// eslint-disable-next-line
			const coords = '0 ' + yPos + 'px';
			parallax.style.backgroundPosition = coords;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
