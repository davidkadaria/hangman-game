import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { WordBoard, PopupCard, Button, KeyBoard } from '../../components';
import { isValidCategory, getRandomWordByCategory, initializeKeyboard } from '../../utils';
import { IconMenu, IconHeart, IconPaused } from '../../icons';
import type { Word } from './types';
import './GamePlay.css';

const selectedWordsDuringSession: string[] = [];

function GamePlay() {
	const [isPaused, setIsPaused] = useState(false);
	const [currentWord, setCurrentWord] = useState<Word[] | undefined>();
	const [keyboard, setKeyboard] = useState(initializeKeyboard);

	const { category } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (category) {
			if (!isValidCategory(category)) {
				// Redirect to pick-category page
				navigate('/pick-category');
			} else {
				const randomWord = getRandomWordByCategory(category, selectedWordsDuringSession);
				// Split the word into an array of words
				const currentWordAsArrayOfWords = randomWord.split(' ');
				// Convert the array of words into an array of objects
				const currentWordAsArrayOfObjects = currentWordAsArrayOfWords.map((word: string): Word => {
					return {
						word: word.split('').map((symbol: string) => {
							return {
								symbol,
								guessed: false,
							};
						}),
					};
				});

				setCurrentWord(currentWordAsArrayOfObjects);
			}
		} else {
			navigate('/pick-category');
		}

		console.log(selectedWordsDuringSession);
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

			<main className='GamePlay__main'>
				<WordBoard wordList={currentWord} />
				<KeyBoard currentState={keyboard} />
			</main>

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
