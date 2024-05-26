import type { Props } from './types';
import './WordBoard.css';

function WordBoard({ word }: Props) {
	return (
		<div className='WordBoard'>
			{word?.map((word, index) => (
				<div key={index} className='WordBoard__word'>
					{word.word.map((character, index) => (
						<span key={index} className='WordBoard__character'>
							{character.symbol}
						</span>
					))}
				</div>
			))}
		</div>
	);
}

export { WordBoard };
