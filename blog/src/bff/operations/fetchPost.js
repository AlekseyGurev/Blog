import { getPost, getComments } from '../api';

export const fetchPost = async (id) => {
	const post = await getPost(id);

	const comments = await getComments(id);

	return {
		error: null,
		res: { ...post, comments },
	};
};
