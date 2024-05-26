import { Header, InstructionCard } from '../../components';
import { instructionsData } from './data';
import './HowToPlay.css';

function HowToPlay() {
	return (
		<>
			<Header heading='How to Play' goBackPath='/' />
			<div className='HowToPlay__instructions'>
				{instructionsData.map((instruction) => (
					<InstructionCard
						key={instruction.id}
						number={instruction.id}
						title={instruction.title}
						instructionText={instruction.content}
					/>
				))}
			</div>
		</>
	);
}

export { HowToPlay };
