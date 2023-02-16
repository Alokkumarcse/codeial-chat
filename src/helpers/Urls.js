const rootAPI = "https://dummyjson.com/";

export const APIUrls = {
	login: () => `${rootAPI}auth/login`,
	signup: () => `${rootAPI}auth/signup`,
	fetchPosts: (page = 0, limit = 10) =>
		`${rootAPI}posts?limit=${limit}&skip=${page}`,
};
