/* eslint-disable no-empty */
// Libs
import * as Cookies from 'js-cookie';

// Actions
import {
	updateError,
	updateCreateSuccess,
	updateRecoverSuccess,
	verifyEmailExisting,
} from '../modules/login-module';

// Middlewares
import {
	loginUserMiddleware,
	createAccountMiddleware,
	// sendRecoverPasswordMiddleware,
	verifyEmailExistingMiddleware,
} from '../middlewares/login-middleware';


export const loginUserThunk = (info) => (
	async (dispatch) => {
		try {
			const response = await loginUserMiddleware(info);

			Cookies.set(
				'petronect_creds',
				{
					accessToken: response.data.Authorization,
					userId: response.data.UserID,
					name: response.data.name,
					username: info.email,
				},
			);
			info.history.replace('/match-relevancia');
		} catch (err) {
			dispatch(updateError(true));
		}
	}
);

export const createAccountThunk = (info) => (
	async (dispatch) => {
		try {
			await createAccountMiddleware(info);

			dispatch(updateCreateSuccess(true));
		} catch (err) {
			dispatch(updateCreateSuccess(false));
		}
	}
);

export const logoutThunk = (info) => (
	async () => {
		try {
			Cookies.remove('petronect_creds');
			info.history.replace('/');
		} catch (err) {}
	}
);

export const sendRecoverPassword = (info) => (
	async (dispatch) => {
		try {
			let lalala = '';
			const responseEmail = await verifyEmailExistingMiddleware(info);
			lalala = responseEmail.data;

			if (lalala) {
				await verifyEmailExistingMiddleware(info);
				dispatch(updateRecoverSuccess(true));
			}
			dispatch(verifyEmailExisting(responseEmail.data));
			// await sendRecoverPasswordMiddleware(info);
		} catch (err) {
		}
	}
);

// export const verifyEmailExistingThunk = (info) => (
// 	async (dispatch) => {
// 		try {
// 			const dataEmail = '';
// 			const response = await verifyEmailExistingMiddleware(info);
// 			console.log('que', response.data)
// 			dataEmail = response.data;
// 			console.log('oi qu haha', dataEmail)
// 			dispatch(verifyEmailExisting('truenjh'))
// 			console.log('que', response.data)
// 		} catch (err) {
// 			console.log('error', err.response)
// 		}
// 	}
// );

export default null;
