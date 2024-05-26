import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PopupCard, Button } from '../../components';
import { isValidCategory } from '../../utils';
import { IconMenu, IconHeart, IconPaused } from '../../icons';
import './GamePlay.css';

function GamePlay() {
	const [isPaused, setIsPaused] = useState(false);

	const { category } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (category && !isValidCategory(category)) {
			// Redirect to pick-category page
			navigate('/pick-category');
		}
	}, [category, navigate]);

	return (
		<>
			<header className='GamePlay__header'>
				<div className='GamePlay__heading'>
					<div
						className='GamePlay__menu'
						onClick={() => {
							setIsPaused(true);
						}}
					>
						<IconMenu />
					</div>
					<h1 className='GamePlay__category-name'>{category}</h1>
				</div>
				<div className='GamePlay__health'>
					<div className='GamePlay__health-indicator'>
						<span className='GamePlay__health-current'></span>
					</div>
					<IconHeart />
				</div>
			</header>

			<main className='GamePlay__main'></main>

			{isPaused && (
				<PopupCard title={<IconPaused />} darkenBackground>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							setIsPaused(false);
						}}
						label='Continue'
					/>
					<Link to='/pick-category' className='GamePlay__pause-button'>
						<Button label='New category' />
					</Link>
					<Link to='/' className='GamePlay__pause-button'>
						<Button label='Quit game' variant='danger' />
					</Link>
				</PopupCard>
			)}
		</>
	);
}

export { GamePlay };
