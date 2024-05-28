import type { Keyboard } from '../../utils/initializeKeyboard';

type Props = {
	currentState: Keyboard;
	handleKeyboardKeyClick: (symbol: string) => void;
};

export type { Props };
