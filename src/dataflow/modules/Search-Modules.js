const ADD_ITEM = 'search/search/ADD_ITEM';
const PUT_FAVORITE = 'favorite/favorite/PUT_FAVORITE';
const OPPORTUNITIES = 'opportunities/opportunities/OPPORTUNITIES';

const initialState = {
	search: [],
	favorite: [],
	opportunities: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, search: state.search.concat([action.info])};
		case PUT_FAVORITE:
			return { ...state, favorite: state.favorite.concat([action.info])};
		case OPPORTUNITIES:
			return { ...state, opportunities: state.opportunities.concat([action.info])};
		default:
			return state;
	}
}

export const addItem = (info) => ({
	type: ADD_ITEM,
	info,
});

export const putFavorite = (info) => ({
	type: PUT_FAVORITE,
	info,
});

export const opportunities = (info) => ({
	type: OPPORTUNITIES,
	info,
});
