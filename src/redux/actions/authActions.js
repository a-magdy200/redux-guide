import { LOGIN, LOGOUT } from "../types/authTypes";

export const loginAction = (userData) => {
	return {
		type: LOGIN,
		payload: {
			userData,
		},
	};
};
export const logoutAction = {
	type: LOGOUT,
};

// Using Thunk
export const asyncAction = () => {
	return (dispatch) => {
		//
		//
		//
		//
		//
		fetch().then((r) => {
			dispatch(loginAction(userData));
		});
	};
};
