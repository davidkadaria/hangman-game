import type { Props } from './types';
import './WordBoard.css';

function WordBoard({ wordList }: Props) {
	return (
		<div className='WordBoard'>
			{wordList?.map((word, index) => (
				<div key={index} className='WordBoard__word'>
					{word.word.map((character, index) => (
						<span
							key={index}
							className={`WordBoard__character${
								character.guessed ? ' WordBoard__character--guessed' : ''
							}`}
						>
							{character.guessed && character.symbol}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

export { WordBoard };
