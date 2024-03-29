import { setPostData } from './set-post-data';

export const savePostAsync = (requestServer, id, data) => (dispatch) => {
	return requestServer('editPost', id, data).then((postData) => {
		dispatch(setPostData(postData.res));

		return postData.res;
	});
};
