import * as Cookies from 'js-cookie';

export const isAuthenticated = () => {
	try {
		const response = Cookies.get('petronect_creds');

		if (!(JSON.parse(response))) {
			return false;
		}
		return true;
	} catch (err) {
		return false;
	}
};

export default isAuthenticated;
