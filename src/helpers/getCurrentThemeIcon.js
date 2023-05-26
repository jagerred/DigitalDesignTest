import sun from 'assets/svg/sun.svg';
import moon from 'assets/svg/moon.svg';

export const getCurrentThemeIcon = () => {
	const isLightTheme = document
		.querySelector('.body')
		.classList.contains('light-theme');
	return isLightTheme ? moon : sun;
};
