import type { Props } from './types';
import './Button.css';

function Button({ label, onClick, variant = 'primary' }: Props) {
	return (
		<div className={`Button Button--${variant}`} onClick={onClick}>
			{label}
		</div>
	);
}

export { Button };
