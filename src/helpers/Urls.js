const rootAPI = "https://dummyjson.com/";

const APIUrls = {
	login: () => `${rootAPI}/auth/login`,
	fetchPosts: (page = 0, limit = 10) =>
		`https://jsonplaceholder.typicode.com/posts?-page=${page}&limit=${limit}`,
};
