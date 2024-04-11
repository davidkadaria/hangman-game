import type { Instruction } from './types';

const instructionsData: Instruction[] = [
	{
		id: '01',
		title: 'Choose a category',
		content:
			'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
	},
	{
		id: '02',
		title: 'Guess letters',
		content:
			'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.',
	},
	{
		id: '03',
		title: 'Win or lose',
		content:
			'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
	},
];

export { instructionsData };
