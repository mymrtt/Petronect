// Libs
import * as Cookies from 'js-cookie';

// Actions
import { updateError, updateCreateSuccess, updateRecoverSuccess, verifyEmailExisting } from '../modules/login-module';

// Middlewares
import { loginUserMiddleware, createAccountMiddleware, sendRecoverPasswordMiddleware, verifyEmailExistingMiddleware } from '../middlewares/login-middleware';


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
		} catch (err) {
			console.log('error', err);
		}
	}
);

export const sendRecoverPassword = (info) => (
	async (dispatch) => {
		try {
			const responseEmail = await verifyEmailExistingMiddleware(info);

			if (responseEmail.data) {
				await sendRecoverPasswordMiddleware(info);
				dispatch(updateRecoverSuccess(true));
				dispatch(verifyEmailExisting(null));
			}
				dispatch(verifyEmailExisting(responseEmail.data));
			} catch (err) {
		}
	}
);

// export const sendRecoverPassword = (info) => (
// 	async (dispatch) => {
// 		try {
// 			let lalala = '';
// 			const responseEmail = await verifyEmailExistingMiddleware(info);
// 			lalala = responseEmail.data;

// 			if (responseEmail.data) {
// 				await verifyEmailExistingMiddleware(info);
// 				dispatch(updateRecoverSuccess(true));
// 				dispatch(verifyEmailExisting(null));
// 			}
// 				dispatch(verifyEmailExisting(responseEmail.data));
// 				// await sendRecoverPasswordMiddleware(info);
// 			} catch (err) {
// 		}
// 	}
// );

export default null;
