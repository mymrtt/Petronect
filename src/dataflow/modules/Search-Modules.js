const ADD_ITEM = 'search/search/ADD_ITEM';
const PUT_FAVORITE = 'favorite/favorite/PUT_FAVORITE';
const BIDDING_LIST = 'biddingList/biddingList/BIDDING_LIST';

const initialState = {
	search: [],
	favorite: [],
	biddingList: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_ITEM:
		return {
			...state,
			search: state.search.concat([action.payload]),
		};
	case PUT_FAVORITE:
		return {
			...state,
			favorite: state.favorite.concat([action.payload]),
		};
	case BIDDING_LIST:
		return {
			...state,
			favorite: state.favorite.concat([action.payload]),
		};
	default:
		return state;
	}
}

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});

export const putFavorite = (payload) => ({
	type: PUT_FAVORITE,
	payload,
});

export const biddingList = (payload) => ({
	type: BIDDING_LIST,
	payload,
});
