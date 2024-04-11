import type { Props } from './types';
import './InstructionCard.css';

function InstructionCard({ number, title, instructionText }: Props) {
	return (
		<div className='InstructionCard'>
			<h2 className='InstructionCard__heading'>
				<span className='InstructionCard__number'>{number}</span>
				{title}
			</h2>
			<p className='InstructionCard__content'>{instructionText}</p>
		</div>
	);
}

export { InstructionCard };
