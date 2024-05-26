import data from '../data.json';

type CategoryData = {
	[key: string]: { name: string; selected: boolean }[];
};

function getCategories(): string[] {
	return Object.keys(data.categories);
}

function isValidCategory(category: string): boolean {
	const categories = getCategories();

	return categories.includes(category);
}

function getRandomWordByCategory(category: string, selectedWordsDuringSession: string[]): string {
	const words = (data.categories as CategoryData)[category];
	const filteredWords = words.filter((word) => !selectedWordsDuringSession.includes(word['name']));

	let randomIndex: number;
	if (filteredWords.length === 0) {
		randomIndex = Math.floor(Math.random() * words.length);
	} else {
		randomIndex = Math.floor(Math.random() * filteredWords.length);
	}

	return filteredWords[randomIndex]['name'].toUpperCase();
}

export { getCategories, isValidCategory, getRandomWordByCategory };
