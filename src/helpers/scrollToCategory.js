export const scrollToCategory = () => {
	const categoriesAnchors = document.querySelectorAll('a[href*="#"]');
	categoriesAnchors.forEach(categoryAnchor => {
		categoryAnchor.addEventListener('click', event => {
			event.preventDefault();
			const categoryId = categoryAnchor.getAttribute('href');
			document.querySelector('' + categoryId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
};
