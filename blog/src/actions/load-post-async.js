import { setPostData } from './set-post-data';

export const loadPostAsync = (id, requestServer) => (dispatch) =>
	requestServer('fetchPost', id).then((postData) => {
		dispatch(setPostData(postData.res));
	});
