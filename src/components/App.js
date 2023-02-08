import React from "react";

import { connect } from "react-redux";

import { fetchPosts } from "../actions/posts";

// importing component from separate file where all component exported
import { PostsList } from "./";

class App extends React.Component {
	/**
	 * Fetch data from api in componentDidMount() method.
	 * fetchPosts() method is thunk which is return a function which is preform api call and get data.
	 * so, we need to invoke the fetchPosts() method inside dispatch() method. So dispatch() method
	 * return an object to reducer.
	 */
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	/** Rendering our components here */
	render() {
		const { posts } = this.props;
		return (
			<div>
				<PostsList posts={posts} />
				<PostsList Posts={posts} />
			</div>
		);
	}
}

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
