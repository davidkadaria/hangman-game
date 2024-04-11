import { PopupCard } from '../../components';
import { pageHierarchy } from '../../constants';
import { IconLogo, IconPlay } from '../../icons';
import type { Props } from '../commonTypes';
import './Home.css';

function Home({ setPage }: Props) {
	return (
		<PopupCard title={<IconLogo />}>
			<div className='Home__play-button' onClick={() => setPage(pageHierarchy.pickCategory.id)}>
				<IconPlay />
			</div>
		</PopupCard>
	);
}

export { Home };
