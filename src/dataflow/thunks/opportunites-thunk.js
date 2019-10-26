// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware, postKeywordMiddleware, getAllKeywordMiddleware } from '../middlewares/opportunites-middlewares';

import {
 oportunitiesList, addNotification, removeAllKeywords, getAllNotification 
} from '../modules/oportunities-modules';

// eslint-disable-next-line import/prefer-default-export
export const getAllOpportunitiesThunk = () => (
	async (dispatch, getState) => {
		try {
			const { keywords } = getState().oportunities.cardFilter;
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllOpportunitesMiddleware({ keywords, accessToken });

			const oportunities = {};

			response.data.hits.hits.forEach((item) => {
				oportunities[item._id] = {
					oportunityId: item._id,
					fit: item._score,
					category: item._source.OPPORT_DESCR,
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				};
			});

			dispatch(oportunitiesList(oportunities));
		} catch (err) {
			console.log(err);
		}
	}
);

// export const getOpportunityThunk = (info) => {
// 	async (dispatch) => {
// 		try {
// 			console.log('cicero');
// 			// const response = await getOpportunityById({...info, accessToken});

// 			// const oportunities = {};

// 			// console.log(response);
// 			// response.data.hits.hits.forEach(item => {
// 			// 	oportunities[item._id] = {
// 			// 		oportunityId: item._id,
// 			// 		fit: item._score,
// 			// 		category: item._source.OPPORT_DESCR,
// 			// 		titleDescription: item._source.OPPORT_DESCR,
// 			// 		deadLineInitial: item._source.OPEN_DATE,
// 			// 		deadLineLastOne: item._source.END_DATE,
// 			// 	}
// 			// });

// 			// dispatch(oportunitiesList(oportunities));
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}
// }

export const postKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await postKeywordMiddleware(userId, accessToken, info);

			const keywordList = [];

			const keywordItem = info.keywords.forEach((item) => {
				keywordList.push(item.name);
			});

			await dispatch(addNotification({ ...info, keywordList }));

			dispatch(removeAllKeywords());
		} catch (err) {
			console.log(err);
		}
	}
);

export const getAllKeywordThunk = () => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllKeywordMiddleware(userId, accessToken);

			const keywordsItem = [];

			const getData = response.data.forEach((item,index) => {
				console.log('item', item)
				keywordsItem[index] = {
					...item,
					keywords: item.keywords.map(key => key.name),
				};
			});

			dispatch(getAllNotification(keywordsItem));
		} catch (err) {
			console.log(err);
		}
	}
);