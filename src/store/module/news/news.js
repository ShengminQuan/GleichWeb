import { STATIC_GATEWAY } from '../../../data/Injectables';
import { getValue } from '../../../util/injector';

export const LOAD_NEWS_DATA = 'loadNewsData';

export default {
	namespaced: true,
	state: {
		data: {},
	},
	getters: {
		data: state => state.data,
	},
	mutations: {
		[LOAD_NEWS_DATA]: (state, { data }) => {
			state.data = data;
		},
	},
	actions: {
		[LOAD_NEWS_DATA]: ({ commit }) =>
			getValue(STATIC_GATEWAY)
				.get(`news.json`)
				.then(response => commit(LOAD_NEWS_DATA, response)),
	},
};
