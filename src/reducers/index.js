import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

/**
 * creating combine reducer, which is hold all reducers we have created.
 * it is use in creating Redux store.
 */
export default combineReducers({
	posts,
	auth,
});
