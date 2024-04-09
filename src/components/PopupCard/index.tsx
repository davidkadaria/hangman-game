import type { Props } from './types';
import './PopupCard.css';

function PopupCard({ title, supTitle, subTitle, blurBackground, children }: Props) {
	return (
		<div className={`PopupCard${blurBackground ? ' PopupCard--blurred-background' : ''}`}>
			<h1 className='PopupCard__heading'>
				{supTitle && <span className='PopupCard__supheading'>{supTitle}</span>}
				{title}
				{subTitle && <span className='PopupCard__subheading'>{subTitle}</span>}
			</h1>
			<div className='PopupCard__content'>{children}</div>
		</div>
	);
}

export { PopupCard };
