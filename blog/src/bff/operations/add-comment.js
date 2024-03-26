import { createComment, getPost } from '../api';

export const addComment = async (postId, content, userLogin) => {
	await createComment(postId, content, userLogin);
	const post = await getPost(postId);

	return {
		error: null,
		res: post,
	};
};
