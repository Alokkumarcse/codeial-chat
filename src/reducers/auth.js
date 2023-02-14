import {
	LOGIN_FAILED,
	LOGIN_START,
	LOGIN_SUCCESS,
} from "../actions/actionType";

// create initial state for auth reducer
const initialState = {
	user: {},
	isLoggedIn: false,
	error: null,
	inProgress: false,
};

// create reducer to perform the specified task
export default function auth(state = initialState, action) {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				inProgress: true,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.user,
				isLoggedIn: true,
				inProgress: false,
				error: null,
			};

		case LOGIN_FAILED:
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
