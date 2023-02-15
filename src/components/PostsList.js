import React, { Component } from "react";

import PropsType from "prop-types";

export default class PostsList extends Component {
	render() {
		const { post } = this.props;
		return (
			<div className="posts-list">
				<div className="post-wrapper" key={Math.random() * 1000}>
					<div className="post-header">
						<div className="post-avatar">
							{/* <img src="" alt="user-pic" /> */}
							<span>😊</span>
							<div>
								{/* <span className="post-author">{post.user.name}</span> */}
								<span className="post-author">author</span>
								<span className="post-time">a minute ago</span>
							</div>
						</div>
						<div className="post-content">post content</div>
						<div className="post-actions">
							<div className="post-like">
								{/* <img src="" alt="post-like" /> */}
								<span>❤ 23</span>
								{/* <span>{posts.length}</span> */}
							</div>
							<div className="post-comments-icon">
								{/* <img src="" alt="comments-icon" /> */}
								<span>📧</span>
								{/* <span>{post.comments.length}</span> */}
							</div>
						</div>
						<div className="post-comment-box">
							<input placeholder="Start typing a comment" />
						</div>
						<div className="post-comments-list">
							<div className="post-comments-item">
								<div className="post-comment-header">
									<span className="post-comment-author">Bill</span>
									<span className="post-comment-time">a minute ago</span>
									<span className="post-comment-likes">22</span>
								</div>
								<div className="post-comment-content">Random comment</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PostsList.PropsType = {
	posts: PropsType.array.isRequired,
};
