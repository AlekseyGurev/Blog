import { getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const fetchUsers = async (userSession) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSession, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const users = await getUsers();
	return {
		error: null,
		res: users,
	};
};
