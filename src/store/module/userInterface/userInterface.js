export const CHANGE_FOUNDATION_ACTIVE_ITEM = 'changeFoundationActiveItem';
export const CHANGE_BUSINESS_ACTIVE_ITEM = 'changeBusinessActiveItem';

export default {
	namespaced: true,
	state: {
		foundationActiveItem: 0,
		businessActiveItem: 0,
	},
	getters: {},
	mutations: {
		[CHANGE_FOUNDATION_ACTIVE_ITEM]: (state, value) => {
			state.foundationActiveItem = value;
		},
		[CHANGE_BUSINESS_ACTIVE_ITEM]: (state, value) => {
			state.businessActiveItem = value;
		},
	},
	actions: {
		[CHANGE_FOUNDATION_ACTIVE_ITEM]: ({ commit }, value) => commit(CHANGE_FOUNDATION_ACTIVE_ITEM, value),
		[CHANGE_BUSINESS_ACTIVE_ITEM]: ({ commit }, value) => commit(CHANGE_BUSINESS_ACTIVE_ITEM, value),
	},
};
