import { setPostData } from './set-post-data';

export const removeCommentAsync = (commentId, requestServer) => (dispatch) =>
	requestServer('delComment', commentId).then((postData) => {
		dispatch(setPostData(postData.res));
	});
