import React from "react";

class Register extends React.Component {
	constructor(props) {
		super(props);
		// uncontrolled form handling need using reference of that element
		// this.userNameInputRef = React.createRef();
		// this.emailInputRef = React.createRef();
		// this.passwordInputRef = React.createRef();
		//controlled form handling need state to store and handle the data
		this.state = {
			user: "",
			email: "",
			password: "",
		};
	}

	/** controlled way to handle form data */
	// FUNCTION for handle user name input
	handleUserNameInput = (e) => {
		this.setState({
			user: e.target.value,
		});
	};
	// FUNCTION for handle email input
	handleEmailInput = (e) => {
		this.setState({
			email: e.target.value,
		});
	};
	// FUNCTION for handle password input
	handlePasswordInput = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	// FUNCTION for handle form data submit
	handleFormSubmit = (e) => {
		e.preventDefault();
		// uncontrolled way to extract the form data
		// console.log(this.userNameInputRef.current.value);
		// console.log(this.emailInputRef.current.value);
		// console.log(this.passwordInputRef.current.value);
		// controlled way to extract form data
		const { user, email, password } = this.state;
		console.log(user + " " + email + " " + password);
	};

	render() {
		return (
			<div>
				<h1>Signup Page</h1>
				<form className="login-form">
					<span className="login-signup-header">Register</span>
					<div className="field">
						<input
							type="text"
							placeholder="Username"
							required
							/* Part of uncontrolled component method */
							// ref={this.userNameInputRef}
							/** Part of controlled component method */
							onChange={this.handleUserNameInput}
							value={this.state.user}
						/>
					</div>
					<div className="field">
						<input
							type="email"
							placeholder="Email"
							required
							/* Part of uncontrolled component method */
							// ref={this.emailInputRef}
							/** Part of controlled component method */
							onChange={this.handleEmailInput}
							value={this.state.email}
						/>
					</div>
					<div className="field">
						<input
							type="password"
							placeholder="Password"
							required
							/* Part of uncontrolled component method */
							// ref={this.passwordInputRef}
							/** Part of controlled component method */
							onChange={this.handlePasswordInput}
							value={this.state.password}
						/>
					</div>
					<div className="field">
						<button type="submit" onClick={this.handleFormSubmit}>
							Register
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
