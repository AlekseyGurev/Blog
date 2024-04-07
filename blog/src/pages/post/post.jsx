import { useEffect } from 'react';
import { useParams, useMatch, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { Content } from '../../components';
import { useServerRequest } from '../../hooks';
import {
	CLOSE_MODAL,
	RESET_POST_DATA,
	loadPostAsync,
	openModal,
	removePostAsync,
} from '../../actions';
import { selectPost, selectUserRole } from '../../selectors';
import styled from 'styled-components';
import { useLayoutEffect } from 'react';
import { initialPostState } from '../../reducers/post-reducer';
import { useState } from 'react';
import { Error } from '../../components';
import { ERROR } from '../../constants/error';
import { userRoleAccess } from '../../bff/utilities';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);
	const [error, setError] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(true);
			setError(false);
			return;
		}
		dispatch(loadPostAsync(params.id, requestServer)).then((postData) => {
			setIsLoading(true);
			postData.error ? setError(true) : setError(false);
		});
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

	if (!isLoading) {
		return;
	}

	return (
		<>
			{error ? (
				<Error error={ERROR.PAGE_NOT_EXIST} />
			) : (
				<div className={className}>
					{isCreating || isEditing ? (
						<Content error={!userRoleAccess(userRole) && ERROR.ACCESS_DENIED}>
							<PostForm
								post={isCreating ? initialPostState : post}
								onDeletePost={onDeletePost}
								isCreating={isCreating}
							/>
						</Content>
					) : (
						<>
							<PostContent post={post} onDeletePost={onDeletePost} />
							<Comments comments={post.comments} postId={post.id} />
						</>
					)}
				</div>
			)}
		</>
	);
};

export const Post = styled(PostContainer)``;
