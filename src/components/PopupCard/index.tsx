import type { Props } from './types';
import './PopupCard.css';

function PopupCard({ title, darkenBackground, children }: Props) {
	return (
		<>
			<div className='PopupCard'>
				<h1 className='PopupCard__heading'>{title}</h1>
				<div className='PopupCard__content'>{children}</div>
			</div>
			{darkenBackground && <div className='PopupCard__background' />}
		</>
	);
}

export { PopupCard };
