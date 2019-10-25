// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware, postKeywordMiddleware } from '../middlewares/opportunites-middlewares';

import { oportunitiesList, addNotification, removeAllKeywords } from '../modules/oportunities-modules';

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

export const getOpportunityThunk = (info) => {
	async (dispatch) => {
		try {
			const response = await getOpportunityById({...info, accessToken});

			const oportunities = {};

			console.log(response);
			response.data.hits.hits.forEach(item => {
				oportunities[item._id] = {
					oportunityId: item._id,
					fit: item._score,
					category: item._source.OPPORT_DESCR,
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				}
			});

			dispatch(oportunitiesList(oportunities));
		} catch (err) {
			console.log(err);
		}
	}
}

export const postKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await postKeywordMiddleware(info, accessToken);

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
