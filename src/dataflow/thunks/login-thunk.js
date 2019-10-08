import { loginUserMiddleware } from '../middlewares/login-middleware';

// eslint-disable-next-line import/prefer-default-export
export const loginUserThunk = (info) => (
	async (dispatch) => {
		try {
			const response = await loginUserMiddleware(info);

			console.log(response);
		} catch (err) {
			console.log(err);
		}
	}
);
