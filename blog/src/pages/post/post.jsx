import { useEffect } from 'react';
import { useParams, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { useServerRequest } from '../../hooks';

import {
	CLOSE_MODAL,
	RESET_POST_DATA,
	loadPostAsync,
	openModal,
	removePostAsync,
} from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { initialPostState } from '../../reducers/post-reducer';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	const navigate = useNavigate();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPostAsync(params.id, requestServer));
	}, [dispatch, params, requestServer]);

	const onDeletePost = (id) => {
		if (isCreating) {
			console.log('back');
			navigate('/');
			return;
		}

		dispatch(
			openModal({
				title: 'Удалить пост?',
				onConfirm: () => {
					dispatch(CLOSE_MODAL);
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate(`/posts`);
					});
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm
					post={isCreating ? initialPostState : post}
					onDeletePost={onDeletePost}
					isCreating={isCreating}
				/>
			) : (
				<>
					<PostContent post={post} onDeletePost={onDeletePost} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)``;
