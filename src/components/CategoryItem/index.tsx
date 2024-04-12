import type { Props } from './types';
import './CategoryItem.css';

function CategoryItem({ category, onClick }: Props) {
	return (
		<div className='CategoryItem' onClick={onClick}>
			{category}
		</div>
	);
}

export { CategoryItem };
