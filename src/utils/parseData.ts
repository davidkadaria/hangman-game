import data from '../data.json';

function getCategories(): string[] {
	return Object.keys(data.categories);
}

function isValidCategory(category: string, categories: string[]): boolean {
	return categories.includes(category);
}

export { getCategories, isValidCategory };
