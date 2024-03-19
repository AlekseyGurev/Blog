export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users/?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser);

// fetch('http://localhost:3005/users').then((loadedUsers) => loadedUsers.json());
// const users = await getUsers();
// return users.find(({ login }) => login === loginToFind);
