import { Link } from 'react-router-dom';
import type { Props } from './types';
import './CategoryItem.css';

function CategoryItem({ category }: Props) {
	return (
		<Link to={`/game-play/${category}`} className='CategoryItem'>
			{category}
		</Link>
	);
}

export { CategoryItem };
