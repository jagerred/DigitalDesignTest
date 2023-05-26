export const getFormData = event =>
	Object.fromEntries(new FormData(event.target).entries());
