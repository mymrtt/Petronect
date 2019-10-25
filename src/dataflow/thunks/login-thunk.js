// Libs
import * as Cookies from 'js-cookie';

// Actions
import { updateError, updateCreateSuccess } from '../modules/login-module';

// Middlewares
import { loginUserMiddleware, createAccountMiddleware } from '../middlewares/login-middleware';


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
			info.history.replace('/dashboard');
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
			// console.log(err);
			dispatch(updateCreateSuccess(false));
		}
	}
);

export default null;
