export const renderNavItems = (navigation, itemsArray) => {
	itemsArray.forEach(({ name, id }) => {
		const li = document.createElement('li');
		li.innerHTML = `
    <a href="#${id}" class="link navigation__link">${name}</a>
    `;
		navigation.append(li);
	});
};
