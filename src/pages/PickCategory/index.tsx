import { useMemo } from 'react';
import { Header, CategoryItem } from '../../components';
import { getCategories } from '../../utils';
import './PickCategory.css';

function PickCategory() {
	const categories = useMemo(() => getCategories(), []);

	return (
		<>
			<Header heading='Pick a Category' goBackPath='/' />
			<main className='PickCategory__category-list'>
				{categories.map((category) => (
					<CategoryItem key={category} category={category} />
				))}
			</main>
		</>
	);
}

export { PickCategory };
