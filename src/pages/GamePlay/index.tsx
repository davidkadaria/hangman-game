import { PopupCard, Button } from '../../components';
import { pageHierarchy } from '../../constants';
import { IconMenu, IconHeart, IconPaused } from '../../icons';
import type { Props } from '../commonTypes';
import './GamePlay.css';

function GamePlay({ setPage, category, setCategory, isGamePaused, setPaused }: Props) {
	const handlePauseStateChange = (paused: boolean): void => {
		setPaused && setPaused(paused);
	};

	return (
		<>
			<header className='GamePlay__header'>
				<div className='GamePlay__heading'>
					<div
						className='GamePlay__menu'
						onClick={() => {
							handlePauseStateChange(true);
						}}
					>
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

			{isGamePaused && (
				<PopupCard title={<IconPaused />} darkenBackground>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							handlePauseStateChange(false);
						}}
						label='Continue'
					/>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							handlePauseStateChange(false);
							setCategory && setCategory(undefined);
							setPage(pageHierarchy.pickCategory.id);
						}}
						label='New category'
					/>
					<Button
						customClassName='GamePlay__pause-button'
						onClick={() => {
							handlePauseStateChange(false);
							setPage(pageHierarchy.home.id);
						}}
						label='Quit game'
						variant='danger'
					/>
				</PopupCard>
			)}
		</>
	);
}

export { GamePlay };
