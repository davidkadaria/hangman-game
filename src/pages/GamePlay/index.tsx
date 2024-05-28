import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { WordBoard, PopupCard, Button, KeyBoard } from '../../components';
import { maxHealth } from '../../constants';
import {
	isValidCategory,
	getRandomWordByCategory,
	generateWordState,
	initializeKeyboard,
	isCorrectChoice,
} from '../../utils';
import { IconMenu, IconHeart, IconPaused, IconWin, IconLose } from '../../icons';
import type { Word } from './types';
import './GamePlay.css';

const selectedWordsDuringSession: string[] = [];

function GamePlay() {
	const [isPaused, setIsPaused] = useState(false);
	const [currentWord, setCurrentWord] = useState<Word[] | undefined>();
	const [keyboard, setKeyboard] = useState(initializeKeyboard);
	const [health, setHealth] = useState<number>(maxHealth);
	const [gameStatus, setGameStatus] = useState<'won' | 'lost' | 'playing'>('playing');

	const { category } = useParams();
	const navigate = useNavigate();

	const popupTimeout = useRef<NodeJS.Timeout | undefined>();

	const setupGame = useCallback(
		function () {
			const randomWord = getRandomWordByCategory(category!, selectedWordsDuringSession);
			const randomWordState = generateWordState(randomWord);
			// Add the word to the selected words during the session
			selectedWordsDuringSession.push(randomWord);

			setCurrentWord(randomWordState);
		},
		[category]
	);

	useEffect(() => {
		if (category && isValidCategory(category)) {
			setupGame();
		} else {
			navigate('/pick-category');
		}

		return () => {
			clearTimeout(popupTimeout.current);
		};
	}, [category, navigate, popupTimeout, setupGame]);

	function handleKeyboardKeyClick(symbol: string) {
		if (isCorrectChoice(symbol, keyboard, currentWord!)) {
			// Update the current word state (open the letter/letters)
			setCurrentWord((prevState) => {
				const newState = prevState!.map((word) => {
					return {
						word: word.word.map((letter) => {
							if (letter.symbol === symbol) {
								return {
									...letter,
									guessed: true,
								};
							}

							return letter;
						}),
					};
				});

				// Check if the word is guessed
				const isWordGuessed = newState.every((word) => {
					return word.word.every((letter) => {
						return letter.guessed;
					});
				});

				if (isWordGuessed) {
					// Set the game status to won after a delay
					popupTimeout.current = setTimeout(() => {
						setGameStatus('won');
					}, 1500);
				}

				return newState;
			});
		} else {
			// Decrease the health
			setHealth((prevState) => {
				let newHealth = prevState - 1;
				if (newHealth <= 0) {
					// The game is lost
					// Reveal the word
					setCurrentWord((prevState) => {
						return prevState!.map((word) => {
							return {
								word: word.word.map((letter) => {
									return {
										...letter,
										guessed: true,
									};
								}),
							};
						});
					});
					// Set the game status to lost after a delay
					popupTimeout.current = setTimeout(() => {
						setGameStatus('lost');
					}, 2000);
				}

				return newHealth;
			});
		}
		// Disable the key on the keyboard
		setKeyboard((prevState) => {
			return prevState.map((key) => {
				if (key.symbol === symbol) {
					return {
						...key,
						disabled: true,
					};
				}

				return key;
			});
		});
	}

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
						<span
							className='GamePlay__health-current'
							style={{
								width: `${(health / maxHealth) * 100}%`,
							}}
						></span>
					</div>
					<IconHeart />
				</div>
			</header>

			<main className='GamePlay__main'>
				<WordBoard wordList={currentWord} />
				<KeyBoard currentState={keyboard} handleKeyboardKeyClick={handleKeyboardKeyClick} />
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
					<RepetitiveMenuItems />
				</PopupCard>
			)}
			{gameStatus === 'won' && (
				<PopupCard title={<IconWin />} darkenBackground>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							setupGame();
							setHealth(maxHealth);
							setGameStatus('playing');
							setKeyboard(initializeKeyboard);
						}}
						label='Play again!'
					/>
					<RepetitiveMenuItems />
				</PopupCard>
			)}
			{gameStatus === 'lost' && (
				<PopupCard title={<IconLose />} darkenBackground>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							setupGame();
							setHealth(maxHealth);
							setGameStatus('playing');
							setKeyboard(initializeKeyboard);
						}}
						label='Play again!'
					/>
					<RepetitiveMenuItems />
				</PopupCard>
			)}
		</>
	);
}

const RepetitiveMenuItems = memo(() => (
	<>
		<Link to='/pick-category' className='GamePlay__pause-button'>
			<Button label='New category' />
		</Link>
		<Link to='/' className='GamePlay__pause-button'>
			<Button label='Quit game' variant='danger' />
		</Link>
	</>
));

export { GamePlay };
