import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PopupCard, Button } from '../../components';
import { IconLogo, IconPlay } from '../../icons';
import './Home.css';

function Home() {
	useEffect(() => {
		document.body.classList.add('Home');

		return () => {
			document.body.classList.remove('Home');
		};
	}, []);

	return (
		<PopupCard title={<IconLogo />}>
			<Link to='/pick-category' className='Home__play-button'>
				<IconPlay />
			</Link>
			<Link to='/how-to-play'>
				<Button customClassName='Home__how-to-play-button' label='How to play' />
			</Link>
		</PopupCard>
	);
}

export { Home };
