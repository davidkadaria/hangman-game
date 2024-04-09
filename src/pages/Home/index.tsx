import type { Props } from '../commonTypes';
import { PopupCard } from '../../components';

function Home({ setPage }: Props) {
	return (
		<PopupCard supTitle='The' title='Hangman' subTitle='Game'>
			Home
		</PopupCard>
	);
}

export { Home };
