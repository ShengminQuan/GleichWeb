import { EnvironmentNames, PropertyNames, URLNames, VariableNames } from 'data/enum/configNames';

const config = {
	environments: {
		[EnvironmentNames.PRODUCTION]: {
			variables: {},
			urls: {},
		},
		[EnvironmentNames.STAGING]: {
			extends: EnvironmentNames.PRODUCTION,
			variables: {},
			urls: {},
		},
		[EnvironmentNames.DEVELOPMENT]: {
			extends: EnvironmentNames.STAGING,
			variables: {},
			urls: {},
		},
		[EnvironmentNames.LOCAL]: {
			extends: EnvironmentNames.DEVELOPMENT,
			variables: {},
			urls: {},
		},
	},
	variables: {
		[VariableNames.LOCALE_ENABLED]: true,
		[VariableNames.LOCALE_ROUTING_ENABLED]: false,
		[VariableNames.VERSIONED_STATIC_ROOT]: process.env.VERSIONED_STATIC_ROOT,
		[VariableNames.STATIC_ROOT]: process.env.STATIC_ROOT,
		[VariableNames.PUBLIC_PATH]: process.env.PUBLIC_PATH,
		[VariableNames.BOUNDARY_MOBILE_DESKTOP]: 767,
	},
	urls: {
		[URLNames.LOCALE]: `${process.env.VERSIONED_STATIC_ROOT}locale/{locale}.json`,
		[URLNames.API]: `${process.env.PUBLIC_PATH}api/`,
		[URLNames.STATIC_API]: `${process.env.VERSIONED_STATIC_ROOT}json/`,
	},
	properties: {
		[PropertyNames.DEFAULT_LOCALE]: 'en-gb',
		[PropertyNames.AVAILABLE_LOCALES]: [
			{
				code: 'en-gb',
				urlPrefix: 'en',
				translationKey: 'en-gb',
			},
			{
				code: 'zh-cn',
				urlPrefix: 'zh',
				translationKey: 'zh-cn',
			},
		],
	},
};

let environment = EnvironmentNames.PRODUCTION;
const { host } = document.location;

switch (host.split(':').shift()) {
	case 'localhost': {
		environment = EnvironmentNames.LOCAL;
		break;
	}
	default: {
		environment = EnvironmentNames.PRODUCTION;
		break;
	}
}

export default {
	config,
	environment,
};
