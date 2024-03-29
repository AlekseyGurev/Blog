export const removePostAsync = (requestServer, id) => (dispatch) =>
	requestServer('delPost', id);
