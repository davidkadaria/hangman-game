import { englishAlphabet } from '../constants';

function initializeKeyboard() {
	const keyboard = [];

	for (let i = 0; i < englishAlphabet.length; i++) {
		keyboard.push({
			symbol: englishAlphabet[i].toLocaleUpperCase(),
			disabled: false,
		});
	}

	return keyboard;
}

export { initializeKeyboard };
