import { mapActions } from 'vuex';
import { UserInterfaceMutationTypes } from '../../store/module/userInterface';

export default {
	name: 'FooterComponent',
	methods: {
		...mapActions({
			changeFoundationActiveItem: UserInterfaceMutationTypes.CHANGE_FOUNDATION_ACTIVE_ITEM,
			changeBusinessActiveItem: UserInterfaceMutationTypes.CHANGE_BUSINESS_ACTIVE_ITEM,
		}),
		handleFoundationActiveItem(value) {
			this.changeFoundationActiveItem(value);
		},
		handleBusinessActiveItem(value) {
			this.changeBusinessActiveItem(value);
		},
	},
};
