import axios from 'axios';

const API_URL = 'https://premium.petronextlab.io/petronect-app-core-api';


// eslint-disable-next-line import/prefer-default-export
export const notificationsUserMiddleware = (userId, accessToken) => axios({
	url: `${API_URL}/users/${userId}/user-notification-settings`,
	method: 'get',
	headers: {
    // 'Content-Type': 'application/json',
    Authorization: accessToken,
	},
});


export const postNotificationsUserMiddleware = (userId, accessToken, info) => axios({
	url: `${API_URL}/users/${userId}/user-notification-settings`,
	method: 'put',
	headers: {
    // 'Content-Type': 'application/json',
    Authorization: accessToken,
	},
	data: info,
});


