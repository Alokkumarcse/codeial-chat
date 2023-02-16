import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";

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
	handleFormSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		if (email && password) {
			this.props.dispatch(login(email, password));
		}
	};

	render() {
		const { error, inProgress } = this.props.auth;
		return (
			<div>
				<h1>Login page</h1>
				<form className="login-form">
					<span className="login-signup-header">Log In</span>
					{error && <div className="alert error-dailog"> {error} </div>}
					<div className="field">
						<input
							type="text"
							placeholder="Username"
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
						{inProgress ? (
							<button
								type="submit"
								onClick={this.handleFormSubmit}
								disabled={inProgress}
							>
								Logging in...
							</button>
						) : (
							<button type="submit" onClick={this.handleFormSubmit}>
								Log In
							</button>
						)}
					</div>
				</form>
			</div>
		);
	}
}

// connect Login component to redux store so that they access of state and dispatch methods of redux store as a props.
function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}
export default connect(mapStateToProps)(Login);
