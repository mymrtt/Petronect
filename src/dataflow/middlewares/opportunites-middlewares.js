import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = (info) => axios({
	url: `${API_URL}/opportunities/search`,
	method: 'post',
	headers: {
		Authorization: info.accessToken,
	},
	data: info.keywords,
});

export const getOpportunitesById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});

// export const postKeywordMiddleware = (info, accessToken, userId) => axios({
// 	url: `${API_URL}/users/${userId}/keyword-filter`,
// 	method: 'post',
// 	headers: {
// 		Authorization: accessToken,
// 	},
// 	data: info,
// });

export const postKeywordMiddleware = (info) => (console.log('test', info));
