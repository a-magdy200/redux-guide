const productsReducer = (state = { list: [] }, action) => {
	let newState;
	switch (action.type) {
		case "type1":
			newState = { ...state };
			// const newState = Object.assign({}, state);
			newState.list.push(1);
			return newState;
		case "type2":
			newState = { ...state };
			newState.list.pop();
			return newState;
		default:
			return state;
	}
};

export default productsReducer;
