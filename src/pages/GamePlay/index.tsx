import { IconMenu, IconHeart } from '../../icons';
import type { Props } from '../commonTypes';
import './GamePlay.css';

function GamePlay({ setPage, category }: Props) {
	return (
		<>
			<header className='GamePlay__header'>
				<div className='GamePlay__heading'>
					<div className='GamePlay__menu'>
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

			<main className='GamePlay__main'></main>
		</>
	);
}

export { GamePlay };
