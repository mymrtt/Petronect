import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

// eslint-disable-next-line import/prefer-default-export
export const loginUserMiddleware = (info) => axios({
	url: `${API_URL}/login`,
	method: 'post',
	header: {
		'Content-Type': 'application/json',
	},
	data: {
		email: info.email,
		password: info.password,
	},
});

export const createAccountMiddleware = (info) => axios({
	url: `${API_URL}/sign-up`,
	method: 'post',
	header: {
		'Content-Type': 'application/json',
	},
	data: {
		email: info.email,
		name: info.name,
		password: info.password,
	},
});
