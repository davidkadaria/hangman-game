import { Link } from 'react-router-dom';
import { IconBack } from '../../icons';
import type { Props } from './types';
import './Header.css';

function Header({ heading, goBackPath }: Props) {
	return (
		<header className='Header'>
			<Link to={goBackPath} className='Header__icon'>
				<IconBack />
			</Link>
			<h1 className='Header__heading'>{heading}</h1>
		</header>
	);
}

export { Header };
