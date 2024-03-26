import { setPostData } from './set-post-data';

export const removeCommentAsync = (commentId, postId, requestServer) => (dispatch) =>
	requestServer('delComment', commentId, postId).then((postData) => {
		dispatch(setPostData(postData.res));
	});
