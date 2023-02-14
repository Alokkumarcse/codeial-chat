import React from "react";

class Login extends React.Component {
	// uncontrolled form component
	constructor(props) {
		super(props);
		this.emailInputRef = React.createRef();
		this.passwordInputRef = React.createRef();
	}

	// event for handle form submit
	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log("emailInputRef ", this.emailInputRef);
		console.log("passwordInputRef ", this.passwordInputRef);
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
							ref={this.emailInputRef}
							required
							/* Part of uncontrolled component method */
							// ref={this.emailInputRef}
						/>
					</div>
					<div className="field">
						<input
							type="password"
							placeholder="*******"
							ref={this.passwordInputRef}
							required
							/* Part of uncontrolled component method */
							// ref={this.passwordInputRef}
						/>
					</div>
					<div className="field">
						<button type="submit" onClick={(e) => this.handleFormSubmit(e)}>
							Log In
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
