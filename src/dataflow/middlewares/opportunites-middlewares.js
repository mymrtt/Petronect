import axios from 'axios';
import * as Cookies from 'js-cookie';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = (info) => axios({
	url: `${API_URL}/opportunities/search`,
	method: 'post',
	headers: {
		Authorization: info.accessToken,
	},
	data: info.keywords,
});

export const getOpportunityById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});

export const postKeywordMiddleware = (userId, accessToken, info) => axios({
	url: `${API_URL}/users/${userId}/keyword-filter`,
	method: 'post',
	headers: {
		Authorization: accessToken,
	},
	data: info,
});

export const getAllKeywordMiddleware = (userId, accessToken) => axios({
	url: `${API_URL}/users/${userId}/keyword-filter`,
	method: 'get',
	headers: {
		Authorization: accessToken,
	},
});

export const deleteNotification = (keywordFilterId) => {
	const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
  return axios({
    method: 'delete',
    headers: {
      Authorization: accessToken,
    },
    url: `${API_URL}/users/${userId}/keyword-filter/${keywordFilterId}`,
  });
};



