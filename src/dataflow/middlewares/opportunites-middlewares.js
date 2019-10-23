import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = (info) => axios({
	url: `${API_URL}/opportunities/search`,
	method: 'post',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm9wenJAZ21haWwuY29tIiwiZXhwIjoxNTcyNjE4ODE4fQ.qHgY78Or9e3Qbg-mb-_GsyC-k3lL8d7iHErcJkqpXwLedJfoniG8lIiVGJT10UHeRq8uH7GUBsSvu5-Aq9y-4A',
	},
	data: ['parafuso', 'capacete'],
});

export const getOpportunitesById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});
