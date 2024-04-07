import './Screen.css';
import type { Props } from './types';

function Screen({ page }: Props): JSX.Element {
	return <h1>{page}</h1>;
}

export { Screen };
