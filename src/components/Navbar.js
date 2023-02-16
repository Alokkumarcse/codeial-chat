import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
	render() {
		console.log(this.props.auth);

		return (
			<nav className="nav">
				<div className="left-div">
					<Link to="/" style={{ textDecoration: "none" }}>
						{/* <img src="⚛" alt="logo" /> */}
						<span className="logo">⚛</span>
					</Link>
				</div>
				<div className="search-container">
					{/* <img className="search-icon" src="🔍" alt="search-icon" /> */}
					<span className="search-icon">🔍</span>
					<input placeholder="Search" />

					<div className="search-results">
						<ul>
							<li className="search-results-row">
								{/* <img src=alt="user-dp" /> */}
								<span> 📚 </span>
								<span>John Wick</span>
							</li>
							<li className="search-results-row">
								{/* <img src="🦸‍♂️" alt="user-dp" /> */}
								<span>🦸‍♂️</span>
								<span>John Doe</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="right-nav">
					<div
						className="user"
						style={{ display: "flex", alignItems: "center" }}
					>
						{/* <img src="" alt="user-dp" id="user-dp" /> */}
						<span id="user-dp">😎</span>
						<span>John Wick</span>
					</div>
					<div className="nav-links">
						<ul
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								textDecoration: "none",
							}}
						>
							<Link to="/">Home</Link>
							<Link to="login">Login</Link>
							<Link to="register">Register</Link>
							<Link to="logout">Logout</Link>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

export default connect(mapStateToProps)(Navbar);
