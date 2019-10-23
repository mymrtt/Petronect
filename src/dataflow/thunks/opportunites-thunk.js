// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware } from '../middlewares/opportunites-middlewares';

import { oportunitiesList } from '../modules/oportunities-modules'

export const getAllOpportunitiesThunk = (info) => (
	async (dispatch, getState) => {
		try {
			const { keywords } = getState().oportunities.cardFilter;
			console.log(keywords)
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllOpportunitesMiddleware({keywords, accessToken});

			const opportunites = {};

			response.data.hits.hits.forEach(item => {
				opportunites[item._id] = {
					oportunityId: item._id,
					fit: item._score,
					category: item._source.OPPORT_DESCR,
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				}
			});

			dispatch(oportunitiesList(opportunites));
		} catch (err) {
			console.log(err);
		}
	}
);