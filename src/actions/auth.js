import { APIUrls } from "../helpers/Urls";
import { getFormBody } from "../helpers/Utils";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionType";

export function StartLogin() {
	return {
		type: LOGIN_START,
	};
}

export function login(email, password) {
	return (dispatch) => {
		const url = APIUrls.login(email, password);
		fetch(url, {
			method: "post",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: JSON.stringify(getFormBody({ email, password })),
		});
	};
}
