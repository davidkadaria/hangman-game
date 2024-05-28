import type { Word } from '../pages/GamePlay/types';

function generateWordState(word: string): Word[] {
	// Split the word into an array of words
	const currentWordAsArrayOfWords = word.split(' ');
	// Convert the array of words into an array of objects
	const currentWordAsArrayOfObjects = currentWordAsArrayOfWords.map((w: string): Word => {
		return {
			word: w.split('').map((symbol: string) => {
				return {
					symbol,
					guessed: false,
				};
			}),
		};
	});

	return currentWordAsArrayOfObjects;
}

export { generateWordState };
