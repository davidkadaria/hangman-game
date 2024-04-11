import type { Props } from './types';
import './Header.css';

function Header({ heading }: Props) {
	return <header>{heading}</header>;
}

export { Header };
