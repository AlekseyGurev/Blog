import { setPostsData } from './set-posts-data';

export const loadPostsAsync = (requestServer, page, limit, searchPhrase) => (dispatch) =>
	requestServer('fetchPosts', page, limit, searchPhrase).then((postsData) => {
		dispatch(setPostsData(postsData.res));
	});
