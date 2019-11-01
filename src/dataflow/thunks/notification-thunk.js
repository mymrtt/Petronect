import * as Cookies from 'js-cookie';

import {
	notificationsUserMiddleware,
	postNotificationsUserMiddleware
} from '../middlewares/notifications-middlewares';


export const getNotificationUserThunk = () => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
      const response = await notificationsUserMiddleware(userId, accessToken);
      return response;
		} catch (err) {}
	}
);

export const postNotificationUserThunk = (info) => (
	async (dispatch) => {
		try {
			const { accessToken, userId } = JSON.parse(Cookies.get('petronect_creds'));
      await postNotificationsUserMiddleware(userId, accessToken, info);
		} catch (err) {}
	}
);