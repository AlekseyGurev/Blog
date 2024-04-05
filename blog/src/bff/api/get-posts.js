import { transformPost } from '../transformers';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
		.then((Posts) => Posts.json())
		.then((loadedPosts) => {
			return (
				loadedPosts && {
					...loadedPosts,
					data: loadedPosts.data.map(transformPost),
				}
			);
		});
