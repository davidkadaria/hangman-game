import type { Props } from './types';
import './Button.css';

function Button({ label, onClick, customClassName, variant = 'primary' }: Props) {
	return (
		<div
			className={`Button Button--${variant}${customClassName ? ` ${customClassName}` : ''}`}
			onClick={onClick}
		>
			{label}
		</div>
	);
}

export { Button };
