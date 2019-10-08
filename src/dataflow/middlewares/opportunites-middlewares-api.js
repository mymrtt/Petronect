import axios from 'axios';

const API_URL = 'http://petronect-app-core-api-homolog-env.us-east-1.elasticbeanstalk.com/petronect-app-core-api';

export const getAllOpportunitesMiddleware = () => axios({
	url: `${API_URL}/opportunities?page=0&limit=20`,
	method: 'get',
	headers: {
		Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrZWx2aW4uZi5hbG1laWRhQGdtYWlsLmNvbSIsImV4cCI6MTU3MDQ1MTI3OH0.LiPghaFhMzMaY_gmSEb0gCBbu_egAHufDqTZP0g3LOyVTzpP_3Q2YzZfdPFHZHIdGJnV0cVebXQGb7zbkO8AiQ',
	},
});

export const getOpportunitesById = (info) => axios({
	url: `${API_URL}/opportunities/${info.opportunityId}/`,
	method: 'get',
	headers: {
		Authorization: `Bearer ${info.token}`,
	},
});
