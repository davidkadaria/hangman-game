import type { Props } from './types';
import './KeyBoard.css';

function KeyBoard({ currentState, handleKeyboardKeyClick }: Props) {
	return (
		<div className='KeyBoard'>
			{currentState.map((key) => {
				return (
					<button
						key={key.symbol}
						className={`KeyBoard__key ${key.disabled ? 'KeyBoard__key--disabled' : ''}`}
						onClick={() => {
							if (key.disabled) {
								return;
							}
							handleKeyboardKeyClick(key.symbol);
						}}
						disabled={key.disabled}
					>
						{key.symbol}
					</button>
				);
			})}
		</div>
	);
}

export { KeyBoard };
