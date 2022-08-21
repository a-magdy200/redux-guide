import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
});
export default rootReducer;
