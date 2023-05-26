import { categories } from 'data/categories';
import { renderNavItems } from 'helpers/renderNavItems';

export const renderFooter = () => {
	const body = document.querySelector('.body');
	const footer = document.querySelector('.footer__container');
	footer.innerHTML = `
    <ul class='list navigation__list footer__navigation'>
    </ul>
  `;
	const list = footer.querySelector('.navigation__list');
	renderNavItems(list, categories);

	body.append(footer);
};
