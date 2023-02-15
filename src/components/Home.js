import React from "react";
import { PostsList } from "./";

class Home extends React.Component {
	render() {
		const { posts } = this.props;
		return (
			<div>
				<h1>Home page</h1>
				{/* Render post list */}
				{posts.map((post) => {
					return <PostsList post={post} key={post.id} />;
				})}
			</div>
		);
	}
}

export default Home;
