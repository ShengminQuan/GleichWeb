import news, { LOAD_NEWS_DATA } from './news';

export const NewsNamespace = 'news';

export const NewsMutationTypes = {
	LOAD_NEWS_DATA: `${NewsNamespace}/${LOAD_NEWS_DATA}`,
};

export default news;
