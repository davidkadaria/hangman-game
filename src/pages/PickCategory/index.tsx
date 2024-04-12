import { Header, CategoryItem } from '../../components';
import { pageHierarchy } from '../../constants';
import type { Props } from '../commonTypes';

function PickCategory({ setPage, categories }: Props) {
	return (
		<>
			<Header heading='Pick a Category' goBack={() => setPage(pageHierarchy.home.id)} />
			<div className='PickCategory__category-list'>
				{categories &&
					categories.map((category) => (
						<CategoryItem key={category} category={category} onClick={() => {}} />
					))}
			</div>
		</>
	);
}

export { PickCategory };
