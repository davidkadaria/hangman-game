import type { Keyboard } from '../utils/initializeKeyboard';
import type { Word } from '../pages/GamePlay/types';

function isCorrectChoice(key: string, keyboardState: Keyboard, wordState: Word[]): boolean {
	const isCorrect = wordState.some((word) => {
		return word.word.some((letter) => {
			return letter.symbol === key && !letter.guessed;
		});
	});

	return isCorrect;
}

export { isCorrectChoice };
