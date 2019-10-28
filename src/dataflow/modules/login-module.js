const UPDATE_ERROR = 'petronect/search/ADD_ITEM';
const UPDATE_CREATE_SUCCESS = 'petronect/search/UPDATE_CREATE_SUCCESS';
const UPDATE_RECOVER_SUCCESS = 'petronect/search/UPDATE_RECOVER_SUCCESS';
const VERIFY_EMAIL_EXISTING = 'petronect/search/VERIFY_EMAIL_EXISTING';
const GET_NAME_USER = 'petronect/search/GET_NAME_USER';

const initialState = {
	error: '',
	createSuccess: null,
	recoverSuccess: null,
	verifyEmailExisting: true,
	nameUser: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
	case UPDATE_ERROR:
		return {
			...state,
			error: action.info,
		};
	case UPDATE_CREATE_SUCCESS:
		return {
			...state,
			createSuccess: action.info,
		};
	case UPDATE_RECOVER_SUCCESS:
		return {
			...state,
			recoverSuccess: action.info,
		};
	case VERIFY_EMAIL_EXISTING:
		return {
			...state,
			verifyEmailExisting: action.info,
		};
	case GET_NAME_USER:
		return {
			...state,
			nameUser: action.info,
		};
	default:
		return state;
	}
}

export const updateError = (info) => ({
	type: UPDATE_ERROR,
	info,
});

export const updateCreateSuccess = (info) => ({
	type: UPDATE_CREATE_SUCCESS,
	info,
});

export const updateRecoverSuccess = (info) => ({
	type: UPDATE_RECOVER_SUCCESS,
	info,
});

export const verifyEmailExisting = (info) => ({
	type: VERIFY_EMAIL_EXISTING,
	info,
});

export const getNameUser = (info) => ({
	type: GET_NAME_USER,
	info,
});
