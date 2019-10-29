/* eslint-disable no-empty */
/* eslint-disable no-underscore-dangle */
// Libs
import * as Cookies from 'js-cookie';

import {
	getAllOpportunitesMiddleware,
	postKeywordMiddleware,
	getOpportunityById,
	getAllKeywordMiddleware,
	deleteNotificationMiddleware,
} from '../middlewares/opportunities-middlewares';

import {
	oportunitiesList,
	addNotification,
	removeAllKeywords,
	updateSelectedOpportunity,
	getAllNotification,
	deleteNotification,
} from '../modules/opportunities-modules';

export const getAllOpportunitiesThunk = () => (
	async (dispatch, getState) => {
		try {
			const { keywords } = getState().opportunities.cardFilter;
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllOpportunitesMiddleware({ keywords, accessToken });

			const normalizeScore = (score) => {
				if (score <= 1) {
					return 1;
				} if (score < 100) {
					return 100 - (100 / score);
				} return 100;
			};

			const opportunities = {};

			response.data.hits.hits.forEach((item) => {
				opportunities[item._id] = {
					opportunityId: item._id,
					fit: Math.floor(normalizeScore(item._score)),
					category: item._source.OPPORT_DESCR,
					files: item._source.ANEXOS,
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				};
			});

			dispatch(oportunitiesList(opportunities));
		} catch (err) {}
	}
);

export const getOpportunityByIdThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getOpportunityById({
				opportunityId: info.opportunityId,
				accessToken,
			});

			const opportunity = {
				...info,
				opportunityId: response.data._id,
				opportunityTitle: response.data._source.OPPORT_DESCR,
				company: response.data._source.COMPANY_DESC,
				items: response.data._source.ITEMS.map((item) => ({
					id: item.EXLIN,
					title: item.ITEM_DESC,
					qty: item.QUANTITY,
					unit: item.UNIT,
				})),
			};

			dispatch(updateSelectedOpportunity(opportunity));
		} catch (err) {}
	}
);

export const postKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
			await postKeywordMiddleware(userId, accessToken, info);

			const keywordList = [];

			info.keywords.forEach((item) => {
				keywordList.push(item.name);
			});

			await dispatch(addNotification({ ...info, keywordList }));

			dispatch(removeAllKeywords());
		} catch (err) {}
	}
);

export const getAllKeywordThunk = () => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllKeywordMiddleware(userId, accessToken);

			const keywordsItem = {};

			response.data.forEach((item) => {
				const { keywordFilterId, keywords, ...rest } = item;
				keywordsItem[keywordFilterId] = {
					filterId: keywordFilterId,
					...rest,
					keywords: keywords.map((key) => key.name),
				};
			});

			dispatch(getAllNotification(keywordsItem));
		} catch (err) {}
	}
);

export const deleteKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));

			await deleteNotificationMiddleware({
				filterId: info,
				accessToken,
				userId,
			});

			dispatch(deleteNotification(info));
		} catch (err) {}
	}
);

export default null;
