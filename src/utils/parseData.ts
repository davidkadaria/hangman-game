import data from '../data.json';

function getCategories(): string[] {
	return Object.keys(data.categories);
}

export { getCategories };
