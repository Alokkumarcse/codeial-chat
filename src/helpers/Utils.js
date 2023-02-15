/** Creating form body using the params value. */
export function getFormBody(params) {
	const formBody = [];
	for (let property in params) {
		let encodedKey = encodeURIComponent(property); // "user name" => user%20name
		let encodedValue = encodeURIComponent(params[property]); // "alok 123" => alok%2020kumar
		formBody.push(encodedKey + "=" + encodedValue);
	}
	return formBody.join("$");
}
