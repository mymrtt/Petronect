const ADD_KEYWORD = 'keyword/keyword/ADD_KEYWORD';


const initialState = {
	cardFilter: {
		name: '',
		color: '',
		keywords: [
			{
				name: '',
			},
		],
	},
};

export default function (state = initialState, action, {...rest}) {
	switch (action.type) {
	case ADD_ITEM:
		return {
			...state,
			cardFilter: state.cardFilter.name.concat([action.info]),
		};
	case REMOVE_ITEM:
		return {
			...state,
			keyword: state.keyword.filter((item) => item.id !== action.info),
		};
	default:
		return state;
	}
}

export const addItem = (info) => ({
	type: ADD_ITEM,
	info,
});
