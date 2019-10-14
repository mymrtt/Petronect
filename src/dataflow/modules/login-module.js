const UPDATE_ERROR = 'search/search/ADD_ITEM';

const initialState = {
	error: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
	case UPDATE_ERROR:
		return {
			...state,
			error: action.info,
		};
	default:
		return state;
	}
}

export const updateError = (info) => ({
	type: UPDATE_ERROR,
	info,
});
