import { categories } from 'data/categories';

import { getCurrentThemeIcon } from 'helpers/getCurrentThemeIcon';
import { renderNavItems } from 'helpers/renderNavItems';
import { getCurrentBurgerIcon } from 'helpers/getCurrentBurgerIcon';

import burger from 'assets/svg/burger.svg';

export const renderHeader = () => {
	const body = document.querySelector('.body');
	const header = document.querySelector('.header__container');
	const currentThemeIcon = getCurrentThemeIcon();

	header.innerHTML = `
  <button class='header__burger button'><img class='header__burger-icon' src=${burger} alt='burger icon'></img></button>
  <div class='header__contents'>
    <span class='header__title'>Входное задание</span>
    <nav class='navigation__container'>
      <ul class='list navigation__list'>
      </ul>
    </nav>
    <button class=' header__theme-button'>
      <img class='header__theme-icon' src=${currentThemeIcon} alt='theme icon'></img>
    </button>
  </div>  
  `;
	const list = header.querySelector('.navigation__list');
	renderNavItems(list, categories);

	header.querySelector('.header__burger').addEventListener('click', () => {
		header
			.querySelector('.header__contents')
			.classList.toggle('header__contents--visible');

		const burgerIcon = header.querySelector('.header__burger-icon');
		const currentBurgerIcon = getCurrentBurgerIcon();
		burgerIcon.setAttribute('src', currentBurgerIcon);
	});

	header
		.querySelector('.header__theme-button')
		.addEventListener('click', () => {
			const bodyClassList = document.querySelector('.body').classList;
			bodyClassList.toggle('light-theme');

			const themeIcon = header.querySelector('.header__theme-icon');
			const currentThemeIcon = getCurrentThemeIcon();
			themeIcon.setAttribute('src', currentThemeIcon);
		});

	body.prepend(header);
};
