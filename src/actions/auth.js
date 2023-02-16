import { APIUrls } from "../helpers/Urls";
import { getFormBody } from "../helpers/Utils";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionType";

export function startLogin() {
	return {
		type: LOGIN_START,
	};
}

export function loginFailed(errorMessage) {
	return {
		type: LOGIN_FAILED,
		error: errorMessage,
	};
}

export function loginSuccess(user) {
	return {
		type: LOGIN_SUCCESS,
		user,
	};
}

export function login(email, password) {
	return (dispatch) => {
		dispatch(startLogin());
		const url = APIUrls.login();
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			// body: JSON.stringify(getFormBody({ email, password })),
			body: JSON.stringify({
				username: "kminchelle",
				password: "0lelplR",
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.success) {
					// save the data in user property
					dispatch(loginSuccess(data.data));
					return;
				}
				dispatch(loginFailed(data.message));
			});
	};
}
