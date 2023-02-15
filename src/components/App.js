import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import PorpsType from "prop-types";

import { fetchPosts } from "../actions/posts";

// importing component from separate file where all component exported
import { Navbar, Home, Login, Logout, Register, Page404 } from "./";

class App extends React.Component {
	// dispatch fetchPosts action, is a redux thunk to fetch data via making api call.
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	/** Rendering our components here */
	render() {
		const { posts } = this.props;
		return (
			<div>
				{/* Need to wrap all Routes inside <Router></Router> component */}
				<Router>
					<div>
						<Navbar />
						{/* adding route which is selected by router and render that component and pass some default props of Router
						 * such history, Location , match etc props.
						 * we need to pass default props using render(callback) method which is provided by react,
						 * render() method take callback as argument where we render our component and pass as many as props
						 * want to pass.
						 */}

						{/* Wrap all routes inside <switch></switch> component so that only first match of path is render */}
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => {
									return <Home {...props} posts={posts} />;
								}}
							/>
							<Route
								path="/login"
								render={(props) => {
									return <Login {...props} />;
								}}
							/>
							<Route
								path="/logout"
								render={(props) => {
									return <Logout {...props} />;
								}}
							/>
							<Route
								path="/register"
								render={(props) => {
									return <Register {...props} posts={posts} />;
								}}
							/>
							<Route
								render={(props) => {
									return <Page404 {...props} />;
								}}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

// we check here to ensure the our posts props is must be array type and required.
App.PorpsType = {
	posts: PorpsType.array.isRequired,
};

/**
 * map the state we want to pass as props to <App /> component using mapStateToProps(redux-store's state) callback method,
 * which is given as argument in connect() method.
 * mapStateToProps(redux-store's state) method  return selected states's object from redux store state.
 * Connect the App component with redux store using connect() method.
 */
function mapStateToProps(state) {
	return {
		posts: state.posts,
	};
}

// connect(callback)(component) method write this way which is return connected component.
export default connect(mapStateToProps)(App);
