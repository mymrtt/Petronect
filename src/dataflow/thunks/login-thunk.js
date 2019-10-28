// Libs
import * as Cookies from 'js-cookie';

// Actions
import { updateError, updateCreateSuccess, updateRecoverSuccess } from '../modules/login-module';

// Middlewares
import { loginUserMiddleware, createAccountMiddleware, sendRecoverPasswordMiddleware } from '../middlewares/login-middleware';


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
			console.log(info)
			await sendRecoverPasswordMiddleware(info);
			dispatch(updateRecoverSuccess(true))
		} catch (err) {
			console.log(err)
		}
	}
)

export default null;
