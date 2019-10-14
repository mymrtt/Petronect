// Libs
import * as Cookies from 'js-cookie';

// Actions
import { updateError } from '../modules/login-module';

// Middlewares
import { loginUserMiddleware } from '../middlewares/login-middleware';

// eslint-disable-next-line import/prefer-default-export
export const loginUserThunk = (info) => (
	async (dispatch) => {
		try {
			const response = await loginUserMiddleware(info);

			Cookies.set(
				'petronect_creds',
				{
					accessToken: response.data.Authorization,
					username: info.email,
				},
			);
			info.history.replace('/dashboard');
		} catch (err) {
			dispatch(updateError(true));
		}
	}
);
