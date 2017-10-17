import HomePage from 'page/HomePage';
import InvestmentPage from 'page/InvestmentPage';
import Pages from 'data/enum/Pages';
import PageNames from 'data/enum/PageNames';
import FirmPage from '../page/FirmPage/FirmPage';
import ContactPage from '../page/ContactPage/ContactPage';
import LendingPage from '../page/LendingPage/LendingPage';

export default [
	{
		path: Pages.HOME,
		component: HomePage,
		name: PageNames.HOME,
		props: {
			componentId: PageNames.HOME,
		},
	},
	{
		path: Pages.INVESTMENT,
		component: InvestmentPage,
		name: PageNames.INVESTMENT,
		props: {
			componentId: PageNames.INVESTMENT,
		},
	},
	{
		path: Pages.FIRM,
		component: FirmPage,
		name: PageNames.FIRM,
		props: {
			componentId: PageNames.FIRM,
		},
	},
	{
		path: Pages.CONTACT,
		component: ContactPage,
		name: PageNames.CONTACT,
		props: {
			componentId: PageNames.CONTACT,
		},
	},
	{
		path: Pages.LENDING,
		component: LendingPage,
		name: PageNames.LENDING,
		props: {
			componentId: PageNames.LENDING,
		},
	},
];
