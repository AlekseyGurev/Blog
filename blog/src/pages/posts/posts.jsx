import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostsAsync } from '../../actions';
import { selectPosts } from '../../selectors';
import styled from 'styled-components';
import { Pagination, PostsItem } from './components';
import { useState } from 'react';
import { PAGINATION_LIMIT } from '../../constants';

const PostsContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const requestServer = useServerRequest();
	const posts = useSelector(selectPosts);

	useEffect(() => {
		dispatch(loadPostsAsync(requestServer, page, PAGINATION_LIMIT));
	}, [dispatch, requestServer, page]);

	return (
		<div className={className}>
			<div>
				<input type="text" />
			</div>
			<div>
				<ul className="items__list">
					{posts.data &&
						Object.values(posts.data).map((post) => (
							<PostsItem key={post.id} post={post} />
						))}
				</ul>
			</div>
			{posts.lastPagination > 1 && (
				<Pagination
					page={page}
					setPage={setPage}
					lastPage={posts.lastPagination}
				/>
			)}
		</div>
	);
};

export const Posts = styled(PostsContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	.items__list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
		list-style-type: none;
	}

	.pagination {
		text-align: right;
	}
`;
