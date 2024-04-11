import type { Props } from '../commonTypes';
import { PopupCard } from '../../components';
import { IconLogo } from '../../icons';

function Home({ setPage }: Props) {
	return <PopupCard title={<IconLogo />}>Home</PopupCard>;
}

export { Home };
