import { LOGIN, LOGOUT } from "../types/authTypes";

const authReducer = (state = { isLoggedIn: false, userData: {} }, action) => {
	let newState;
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: true,
				userData: action.payload.userData,
			};
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				userData: {},
			};
		default:
			return state;
	}
};

export default authReducer;
