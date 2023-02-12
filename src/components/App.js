import React from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { connect } from "react-redux";

import PorpsType from "prop-types";

import { fetchPosts } from "../actions/posts";

// importing component from separate file where all component exported
import { PostsList, Navbar, HomeDummy, SignupDummy, LoginDummy } from "./";

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
				<Router>
					<div>
						<Navbar />
						<Link to="/"> Home </Link>
						<Link to="/login"> Login </Link>
						<Link to="/signup">Sing up</Link>
						{/* adding route which is selected by router and render that component */}
						<Route exact path="/" component={HomeDummy} />
						<Route path="/signup" component={SignupDummy} />
						<Route path="/login" component={LoginDummy} />
						
						<PostsList posts={posts} />
						<PostsList Posts={posts} />
					</div>
				</Router>

				<h2>This is the way to learn the React Router.</h2>
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
