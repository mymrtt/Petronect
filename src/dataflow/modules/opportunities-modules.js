import { without, omit } from 'lodash';

export const ADD_ITEM = 'petronect/keyword/ADD_ITEM';
export const REMOVE_ITEM = 'petronect/keyword/REMOVE_ITEM';
export const REMOVE_ALL_KEYWORDS = 'petronect/keyword/REMOVE_ALL_KEYWORDS';
export const PUT_FAVORITE = 'petronect/favorite/PUT_FAVORITE';
export const OPORTUNITIES_LIST = 'petronect/oportunitiesList/OPORTUNITIES_LIST';
export const UPDATE_CARD = 'petronect/opportunities/UPDATE_CARD';
export const REMOVE_FAVORITE = 'petronect/opportunities/REMOVE_FAVORITE';
export const ADD_NOTIFICATION = 'petronect/keyword/ADD_NOTIFICATION';
export const UPDATE_SELECTED_OPPORTUNITY = 'petronect/keyword/UPDATE_SELECTED_OPPORTUNITY';
export const ADD_ALL_NOTIFICATION = 'petronect/keyword/ADD_ALL_NOTIFICATION';
export const REMOVE_ALL_NOTIFICATION = 'petronect/keyword/REMOVE_ALL_NOTIFICATION';
export const DELETE_NOTIFICATION = 'petronect/keyword/DELETE_NOTIFICATION';

const initialState = {
	favoriteList: [],
	cardFilter: {
		keywords: [],
	},
	allKeywords: [],
	opportunities: {},
	selectedOpportunity: {},
	allNotification: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_ITEM:
		return {
			...state,
			cardFilter: {
				keywords: state.cardFilter.keywords.concat([action.info]),
			},
		};
	case REMOVE_ITEM:
		return {
			...state,
			cardFilter: {
				...state.cardFilter,
				keywords: without(state.cardFilter.keywords, action.info),
			},
		};
	case REMOVE_ALL_KEYWORDS:
		return {
			...state,
			cardFilter: {
				keywords: [],
			},
		};
	case OPORTUNITIES_LIST:
		return {
			...state,
			opportunities: action.info,
		};
	case PUT_FAVORITE:
		return {
			...state,
			favoriteList: state.favoriteList.concat([action.info]),
		};
	case REMOVE_FAVORITE:
		return {
			...state,
			favoriteList: without(state.favoriteList, action.info),
		};
	case UPDATE_CARD:
		return {
			...state,
			cardFilter: {
				...action.info,
			},
		};
	case ADD_NOTIFICATION:
		return {
			...state,
			allKeywords: state.allKeywords.concat([action.info]),
		};
	case UPDATE_SELECTED_OPPORTUNITY:
		return {
			...state,
			selectedOpportunity: action.info,
		}
	case ADD_ALL_NOTIFICATION:
		return {
			...state,
			allNotification: action.info,
		};
	case REMOVE_ALL_NOTIFICATION:
		return {
			...state,
			allNotification: [],
		};
	case DELETE_NOTIFICATION:
		console.log(action.info)
		return {
			...state,
			allNotification: omit(state.allNotification, action.info),
		};
	default:
		return state;
	}
}

export const addItem = (info) => ({
	type: ADD_ITEM,
	info,
});

export const removeItem = (info) => ({
	type: REMOVE_ITEM,
	info,
});

export const removeAllKeywords = (info) => ({
	type: REMOVE_ALL_KEYWORDS,
	info,
});

export const oportunitiesList = (info) => ({
	type: OPORTUNITIES_LIST,
	info,
});

export const putFavorite = (info) => ({
	type: PUT_FAVORITE,
	info,
});

export const removeFavorite = (info) => ({
	type: REMOVE_FAVORITE,
	info,
});

export const updateCard = (info) => ({
	type: UPDATE_CARD,
	info,
});

export const addNotification = (info) => ({
	type: ADD_NOTIFICATION,
	info,
});

export const updateSelectedOpportunity = (info) => ({
	type: UPDATE_SELECTED_OPPORTUNITY,
	info,
})
export const getAllNotification = (info) => ({
	type: ADD_ALL_NOTIFICATION,
	info,
});

export const removeAllNotification = (info) => ({
	type: REMOVE_ALL_NOTIFICATION,
	info,
});

export const deleteNotification = (info) => ({
	type: DELETE_NOTIFICATION,
	info,
})
