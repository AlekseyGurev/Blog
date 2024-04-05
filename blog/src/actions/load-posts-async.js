import { setPostsData } from './set-posts-data';

export const loadPostsAsync = (requestServer, page, limit) => (dispatch) =>
	requestServer('fetchPosts', page, limit).then((postsData) => {
		dispatch(setPostsData(postsData.res));
	});
