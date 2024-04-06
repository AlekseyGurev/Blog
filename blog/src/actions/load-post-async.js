import { setPostData } from './set-post-data';

export const loadPostAsync = (id, requestServer) => (dispatch) =>
	requestServer('fetchPost', id).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res));
		}
		return postData;
	});
