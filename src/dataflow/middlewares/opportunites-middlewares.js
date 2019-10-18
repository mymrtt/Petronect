import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = () => axios({
	url: `${API_URL}opportunities/{{opportunityId}}`,
	method: 'get',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZWx2aW4uZi5hbG1laWRhQGdtYWlsLmNvbSIsImV4cCI6MTU3MTU5MjExMX0.0JQH8u8JoKfDeWSHytNoE5FZ950Ux16-RBIItZEZm6kmpQzpKyW02TV1AJlVVo8uulIxd08hSpTtk7eqgutnxQ',
	},
});

export const getOpportunitesById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});
