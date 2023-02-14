import React from "react";

class Login extends React.Component {
	// uncontrolled form component i.e directly manipulate the dom or data flow managed by dom.

	// constructor(props) {
	// 	super(props);
	// 	this.emailInputRef = React.createRef();
	// 	this.passwordInputRef = React.createRef();
	// }

	// event for handle form submit
	// handleFormSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log("emailInputRef ", this.emailInputRef);
	// 	console.log("passwordInputRef ", this.passwordInputRef);
	// };

	// controlled form component i.e data flow managed by react.
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	// email input handler
	handleEmail = (e) => {
		console.log(e.target.value);
		this.setState({
			email: e.target.value,
		});
	};

	// password input handler
	handlePassword = (e) => {
		console.log(e.target.value);
		this.setState({
			password: e.target.value,
		});
	};

	// form submit handler
	handleFormSubmit = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<form className="login-form">
					<span className="login-signup-header">Log In</span>
					<div className="field">
						<input
							type="text"
							placeholder="Email"
							required
							/* Part of uncontrolled component method */
							// ref={this.emailInputRef}
							onChange={this.handleEmail}
							value={this.state.email}
						/>
					</div>
					<div className="field">
						<input
							type="password"
							placeholder="*******"
							required
							/* Part of uncontrolled component method */
							// ref={this.passwordInputRef}
							onChange={this.handlePassword}
							value={this.state.password}
						/>
					</div>
					<div className="field">
						<button type="submit" onClick={this.handleFormSubmit}>
							Log In
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
