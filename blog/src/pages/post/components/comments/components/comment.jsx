import styled from 'styled-components';
import { Icon } from '../../../../../components';
import { selectUserRole } from '../../../../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { ROLE } from '../../../../../bff/constants';
import { useServerRequest } from '../../../../../hooks';
import { removeCommentAsync } from '../../../../../actions';

const CommentContainer = ({ className, comment, setIsComment, isComment }) => {
	const { id, content, author, publishedAt } = comment;
	const useRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onDeleteComment = (id) => {
		dispatch(removeCommentAsync(id, requestServer)).then(() => {
			setIsComment(!isComment);
		});
	};

	return (
		<li className={className}>
			<div className="container-content">
				<div className="description">
					<span className="author">
						<Icon id="fa-user-circle-o" size="22px" margin="0 0 0 0" />
						{author}
					</span>
					<span className="add-at">
						<Icon id="fa-calendar-o" size="22px" margin="0 0 0 0" />
						{publishedAt}
					</span>
				</div>
				<p>{content}</p>
			</div>
			{useRole === ROLE.ADMIN ? (
				<div>
					<a
						onClick={() => {
							onDeleteComment(id);
						}}
					>
						<Icon id="fa-trash-o" size="24px" margin="0 0 0 0" />
					</a>
				</div>
			) : null}
		</li>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	gap: 10px;
	margin-bottom: 20px;

	& p {
		font-size: 18px;
	}

	.container-content {
		padding: 10px 10px;
		border: 1px solid #000000;
		border-radius: 4px;
		width: 100%;
	}
	.description {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}

	.author {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.add-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`;
