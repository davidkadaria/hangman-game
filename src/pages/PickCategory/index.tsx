import { Header, CategoryItem } from '../../components';
import { pageHierarchy } from '../../constants';
import type { Props } from '../commonTypes';
import './PickCategory.css';

function PickCategory({ setPage, categories, setCategory }: Props) {
	return (
		<>
			<Header heading='Pick a Category' goBack={() => setPage(pageHierarchy.home.id)} />
			<div className='PickCategory__category-list'>
				{categories &&
					categories.map((category) => (
						<CategoryItem
							key={category}
							category={category}
							onClick={() => {
								setCategory && setCategory(category);
							}}
						/>
					))}
			</div>
		</>
	);
}

export { PickCategory };
