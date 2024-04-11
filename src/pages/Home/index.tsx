import { PopupCard, Button } from '../../components';
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
			<Button
				customClassName='Home__how-to-play-button'
				onClick={() => setPage(pageHierarchy.howToPlay.id)}
				label='How to play'
			/>
		</PopupCard>
	);
}

export { Home };
