const firstLetterToUppercase = string =>
	string[0].toUpperCase() + string.substr(1);

const options = {
	weekday: 'long',
	week: 'long',
	day: 'numeric',
	year: 'numeric',
	month: 'long',
	timeZone: 'UTC',
};

export const getDayInfo = date => {
	const dateFormat = new Date(date.split('.').reverse().join('/'));
	const weekNumber = Math.ceil(dateFormat.getDate() / 7);
	const weekString = `${weekNumber} неделя`;
	const localeDate = dateFormat.toLocaleString('ru', options).split(' ');

	localeDate[0] = firstLetterToUppercase(localeDate[0]);
	localeDate[1] = weekString;
	localeDate[2] = firstLetterToUppercase(localeDate[2]);
	localeDate[4] = 'года';
	return localeDate.join(' ');
};
