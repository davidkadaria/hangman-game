import { Header, InstructionCard } from '../../components';
import { pageHierarchy } from '../../constants';
import { instructionsData } from './data';
import type { Props } from '../commonTypes';
import './HowToPlay.css';

function HowToPlay({ setPage }: Props) {
	return (
		<>
			<Header heading='How to Play' goBack={() => setPage(pageHierarchy.home.id)} />
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
