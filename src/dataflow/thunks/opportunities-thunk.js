// Libs
import * as Cookies from 'js-cookie';

import { getAllOpportunitesMiddleware, postKeywordMiddleware, getOpportunityById } from '../middlewares/opportunities-middlewares';

import {
	oportunitiesList,
	addNotification,
	removeAllKeywords,
	updateSelectedOpportunity,
} from '../modules/opportunities-modules';

// eslint-disable-next-line import/prefer-default-export
export const getAllOpportunitiesThunk = () => (
	async (dispatch, getState) => {
		try {
			const { keywords } = getState().opportunities.cardFilter;
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			const response = await getAllOpportunitesMiddleware({ keywords, accessToken });

			const  normalizeScore = (score) => {
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
					titleDescription: item._source.OPPORT_DESCR,
					deadLineInitial: item._source.OPEN_DATE,
					deadLineLastOne: item._source.END_DATE,
				};
			});

			dispatch(oportunitiesList(opportunities));
		} catch (err) {
			console.log(err);
		}
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
				items: response.data._source.ITEMS.map(item => ({
					id: item.EXLIN,
					title: item.ITEM_DESC,
					qty: item.QUANTITY,
					unit: item.UNIT,
				}))
			};

			console.log(response, opportunity);
			dispatch(updateSelectedOpportunity(opportunity));
		} catch (err) {
			console.log(err);
		}
	}
)

export const postKeywordThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken } = JSON.parse(Cookies.get('petronect_creds'));
			await postKeywordMiddleware(info, accessToken);

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
