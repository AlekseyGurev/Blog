import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent, Comments } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';
import { useState } from 'react';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	const [isComment, setIsComment] = useState(false);

	useEffect(() => {
		dispatch(loadPostAsync(params.id, requestServer));
	}, [dispatch, params, requestServer, isComment]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments
				comments={post.comments}
				postId={post.id}
				isComment={isComment}
				setIsComment={setIsComment}
			/>
		</div>
	);
};

export const Post = styled(PostContainer)``;
