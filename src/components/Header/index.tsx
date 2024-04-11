import { IconBack } from '../../icons';
import type { Props } from './types';
import './Header.css';

function Header({ heading, goBack }: Props) {
	return (
		<header className='Header'>
			<div className='Header__icon' onClick={goBack}>
				<IconBack />
			</div>
			<h1 className='Header__heading'>{heading}</h1>
		</header>
	);
}

export { Header };
