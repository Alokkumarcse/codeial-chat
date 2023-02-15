/** From these action any action perform on the basis of which action will be triggered */
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
} from "../actions/actionType";

// create initial state for auth reducer
const initialAuthState = {
	user: {},
	error: null,
	isLoggedIn: false,
	inProgress: false,
};

// create reducer to perform the specified task
export default function auth(state = initialAuthState, action) {
	switch (action.type) {
		case LOGIN_START:
			// we fill login form and make a login request to Authentication severe.
			return {
				...state,
				inProgress: true,
				isLoggedIn: false,
			};

		case LOGIN_SUCCESS:
			// If user credentials matched by auth server and if correct then auth server
			// return a user object(user details) and jwt token
			// to access the protected resources.
			// which is we stored in user={} redux state.
			return {
				...state,
				user: action.user,
				isLoggedIn: true,
				inProgress: false,
				error: null,
			};

		case LOGIN_FAILED:
			// if user credentials not matched then auth server gives error.
			return {
				...state,
				inProgress: false,
				error: action.error,
			};

		default:
			return {
				state,
			};
	}
}
