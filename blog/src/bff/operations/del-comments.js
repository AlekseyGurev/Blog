import { sessions } from '../sessions';
import { deleteComment } from '../api';
import { ROLE } from '../constants';

export const delComment = async (userSession, commentId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	deleteComment(commentId);

	return {
		error: null,
		res: true,
	};
};
