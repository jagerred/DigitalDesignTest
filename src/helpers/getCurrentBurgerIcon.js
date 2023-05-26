import burger from 'assets/svg/burger.svg';
import close from 'assets/svg/close.svg';

export const getCurrentBurgerIcon = () => {
	const isMenuVisible = document
		.querySelector('.header__contents')
		.classList.contains('header__contents--visible');
	return isMenuVisible ? close : burger;
};
