import { setPostData } from './set-post-data';

export const addCommentAsync =
	(postId, content, userLogin, requestServer) => (dispatch) =>
		requestServer('addComment', postId, content, userLogin).then((postData) => {
			dispatch(setPostData(postData.res));
		});
