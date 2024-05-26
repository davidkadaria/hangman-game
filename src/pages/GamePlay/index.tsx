import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PopupCard, Button } from '../../components';
import { isValidCategory, getRandomWordByCategory } from '../../utils';
import { IconMenu, IconHeart, IconPaused } from '../../icons';
import type { Character } from './types';
import './GamePlay.css';

const selectedWordsDuringSession: string[] = [];

function GamePlay() {
	const [isPaused, setIsPaused] = useState(false);
	const [currentWord, setCurrentWord] = useState<Character[] | undefined>();

	const { category } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (category) {
			if (!isValidCategory(category)) {
				// Redirect to pick-category page
				navigate('/pick-category');
			} else {
				const randomWord = getRandomWordByCategory(category, selectedWordsDuringSession);
				// Store the selected word to prevent it from being selected again
				selectedWordsDuringSession.push(randomWord);
				// Split the random word into an array of objects that are type of Character
				const currentWordAsArrayOfObjects = randomWord
					.split('')
					.map((character: string): Character => {
						return {
							character,
							guessed: character === ' ' ? true : false,
						};
					});
				// Set the current word to the state
				setCurrentWord(currentWordAsArrayOfObjects);
			}
		} else {
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
