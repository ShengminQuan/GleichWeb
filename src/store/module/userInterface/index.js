import userInterface, { CHANGE_BUSINESS_ACTIVE_ITEM, CHANGE_FOUNDATION_ACTIVE_ITEM } from './userInterface';

export const UserInterfaceNamespace = 'userInterface';

export const UserInterfaceMutationTypes = {
	CHANGE_FOUNDATION_ACTIVE_ITEM: `${UserInterfaceNamespace}/${CHANGE_FOUNDATION_ACTIVE_ITEM}`,
	CHANGE_BUSINESS_ACTIVE_ITEM: `${UserInterfaceNamespace}/${CHANGE_BUSINESS_ACTIVE_ITEM}`,
};

export default userInterface;
