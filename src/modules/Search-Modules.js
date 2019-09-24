const ADD_ITEM = 'search/search/ADD_ITEM'

const initialState = {
	search: []
}

export default function (state = initialState, action){
	switch (action.type){
		case ADD_ITEM:
			return Object.assign({ }, state, {
				search:state.search.concat([action.payload])
			});
		default:
			return state;
	}
}

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload
})
