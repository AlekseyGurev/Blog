import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { Comment } from './components/';
import { selectUserLogin } from '../../../../selectors';
import styled from 'styled-components';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';

const CommentsContainer = ({ className, comments, postId, isComment, setIsComment }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userLogin = useSelector(selectUserLogin);
	const requestServer = useServerRequest();
	const onInputText = ({ target }) => {
		setNewComment(target.value);
	};

	const onNewCommentAdd = (postId, userLogin, content) => {
		dispatch(addCommentAsync(postId, content, userLogin, requestServer)).then(() => {
			setNewComment('');
			setIsComment(!isComment);
		});
	};

	return (
		<div className={className}>
			{userLogin && (
				<div className="container-new-comment">
					<textarea
						value={newComment}
						name="newComment"
						id="newComment"
						rows="7"
						onChange={onInputText}
						placeholder="Комментарий..."
					></textarea>
					<a
						onClick={() => {
							onNewCommentAdd(postId, userLogin, newComment);
						}}
					>
						<Icon id="fa-paper-plane-o" size="22px" margin="0 0 0 0" />
					</a>
				</div>
			)}
			<ul className="comments-list">
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						comment={comment}
						isComment={isComment}
						setIsComment={setIsComment}
					/>
				))}
			</ul>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	.container-new-comment {
		display: flex;
		gap: 10px;

		& textarea {
			padding: 10px 10px;
			font-size: 16px;
			width: 100%;
			resize: none;
			border-radius: 4px;
		}
	}

	.comments-list {
		list-style: none;
		padding: 20px 0;
		margin: 0;
	}
`;
