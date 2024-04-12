import data from '../data.json';

function getCategories() {
	return Object.keys(data.categories);
}

export { getCategories };
