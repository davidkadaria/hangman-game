import { Header } from '../../components';
import { pageHierarchy } from '../../constants';
import type { Props } from '../commonTypes';

function PickCategory({ setPage }: Props) {
	return (
		<>
			<Header heading='Pick category' goBack={() => setPage(pageHierarchy.home.id)} />
		</>
	);
}

export { PickCategory };
