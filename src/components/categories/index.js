import { openModal } from 'components/modal';
import { categories } from 'data/categories';
import { getDayInfo } from 'helpers/getDayInfo';

export const renderCategories = () => {
	const app = document.querySelector('#app');
	categories.forEach(({ id, name, products }) => {
		const categoryContainer = document.createElement('section');
		categoryContainer.className = 'category__container';
		categoryContainer.id = id;
		categoryContainer.innerHTML = `
		<h2 class="category__title">${name}</h2>
		`;

		const list = document.createElement('ul');
		list.className = 'products__container';

		renderProducts(list, products);

		categoryContainer.append(list);

		app.append(categoryContainer);
	});
};

const renderProducts = (currentsList, currentProducts) => {
	currentProducts.forEach(({ name, photo, date, colors }) => {
		const correctDate = getDayInfo(date);
		const li = document.createElement('li');

		li.className = 'product__container';
		li.innerHTML = `
      <div class='product__photo'>
        <img src=${photo} class='image' alt='photo of ${name}'>
      </div>
			<div class='product__info'>
				<h3 class='product__name'>${name}</h3>
      	<p class='product__date'>${correctDate}</p>
			</div>
      
			<button class="button product__button">Купить</button>
`;
		li.querySelector('.product__button').addEventListener('click', () =>
			openModal(name, colors)
		);

		currentsList.append(li);
	});
};
