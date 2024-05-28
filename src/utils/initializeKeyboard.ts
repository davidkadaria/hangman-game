import { englishAlphabet } from '../constants';

type Keyboard = {
	symbol: string;
	disabled: boolean;
}[];

function initializeKeyboard(): Keyboard {
	const keyboard: Keyboard = [];

	for (let i = 0; i < englishAlphabet.length; i++) {
		keyboard.push({
			symbol: englishAlphabet[i].toLocaleUpperCase(),
			disabled: false,
		});
	}

	return keyboard;
}

export { initializeKeyboard };
export type { Keyboard };
