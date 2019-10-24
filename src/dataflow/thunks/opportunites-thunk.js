// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware, postKeywordMiddleware } from '../middlewares/opportunites-middlewares';

import { oportunitiesList, addNotification } from '../modules/oportunities-modules';

export const getAllOpportunitiesThunk = (info) => (
	async (dispatch, getState) => {
		try {
			const { keywords } = getState().oportunities.cardFilter;
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllOpportunitesMiddleware({ keywords, accessToken });

			const opportunites = {};

			response.data.hits.hits.forEach((item) => {
				opportunites[item._id] = {
					oportunityId: item._id,
					fit: item._score,
					category: item._source.OPPORT_DESCR,
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				};
			});

			dispatch(oportunitiesList(opportunites));
		} catch (err) {
			console.log(err);
		}
	}
);


export const postKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await postKeywordMiddleware(info, accessToken);

			const keywordList = [];

			const keywordItem = info.keywords.forEach((item) => {
				keywordList.push(item.name);
			});

			dispatch(addNotification({ ...info, keywordList }));
		} catch (err) {
			console.log(err);
		}
	}
);
