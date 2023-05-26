const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 0) scrollTopBtn.classList.add('scroll-top--hidden');
	else scrollTopBtn.classList.remove('scroll-top--hidden');
});

const scrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

scrollTopBtn.addEventListener('click', scrollTop);
