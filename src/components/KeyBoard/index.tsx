import type { Props } from './types';
import './KeyBoard.css';

function KeyBoard({ currentState }: Props) {
	return (
		<div className='KeyBoard'>
			{currentState.map((key) => {
				return (
					<button
						key={key.symbol}
						className={`KeyBoard__key ${key.disabled ? 'KeyBoard__key--disabled' : ''}`}
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
