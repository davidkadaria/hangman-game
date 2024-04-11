import { Header } from '../../components';
import { pageHierarchy } from '../../constants';
import type { Props } from '../commonTypes';

function HowToPlay({ setPage }: Props) {
	return (
		<>
			<Header heading='How to Play' goBack={() => setPage(pageHierarchy.home.id)} />
		</>
	);
}

export { HowToPlay };
