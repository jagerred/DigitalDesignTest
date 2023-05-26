import { getFormData } from 'helpers/getFormData';

const modal = document.querySelector('.modal__wrapper');

export const openModal = (name, colors) => {
	let radioButtons = '';
	colors.forEach(
		(color, index) =>
			(radioButtons += `
    <label class='modal__radio' for="color-${index}"><input type="radio" id="color-${index}" name="color" value="${color}"/>${color}</label>`)
	);

	modal.classList.remove('hidden');

	modal.innerHTML = `
  <div class='modal__container'>
    <h2 class='modal__title'>Купить ${name}</h2>
    <form class='modal__form'>
      <label class='modal__label' for="count">
        Количество:
        <input class='input modal__count' type="number" id="count" name="count" min='0'/>
      </label>
      <label class='modal__label' for="comment">
        Комментарий:
        <textarea 
          class='input modal__comment' 
          type="text" 
          id="comment" 
          name="comment" 
          maxlength='2000'></textarea>
      </label>    
      <label class='modal__label modal__label--radio' for="color">
        Цвет:${radioButtons}
      </label>
      <span class="modal__error hidden">Заполните все поля!</span>
      <button class='button modal__button modal__button--buy'>Купить</button>
    </form>  
      
    <button class='button modal__button modal__button--close'>Закрыть</button>
  </div>
  `;
	modal
		.querySelector('.modal__form')
		.addEventListener('submit', event => submitForm(event, name));

	modal.addEventListener('click', e => {
		if (e.target.classList.contains('modal__wrapper')) closeModal();
	});

	modal
		.querySelector('.modal__button--close')
		.addEventListener('click', () => closeModal());
};

const submitForm = (event, productName) => {
	event.preventDefault();

	const errorMessage = modal.querySelector('.modal__error');
	errorMessage.classList.add('hidden');

	const { count, color } = getFormData(event);

	if (count && color) {
		closeModal();
		alert(
			`Успешно! Купили ${productName}, цвет - ${color}, количество: ${count}`
		);
	} else {
		errorMessage.classList.remove('hidden');
	}
};

const closeModal = () => {
	modal.classList.add('hidden');
	modal.innerHTML = ``;
};
