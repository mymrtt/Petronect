// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware, getOpportunityById } from '../middlewares/opportunites-middlewares';

import { oportunitiesList } from '../modules/oportunities-modules';

// eslint-disable-next-line import/prefer-default-export
export const getAllOpportunitiesThunk = () => (
	async (dispatch, getState) => {
		const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
		try {
			const { keywords } = getState().oportunities.cardFilter;
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
