import { PopupCard, Button } from '../../components';
import { pageHierarchy } from '../../constants';
import { IconMenu, IconHeart } from '../../icons';
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
				<PopupCard title='Paused' blurBackground>
					<Button
						label='Continue'
						onClick={() => {
							handlePauseStateChange(false);
						}}
					/>
					<Button
						label='New category'
						onClick={() => {
							handlePauseStateChange(false);
							setCategory && setCategory(undefined);
							setPage(pageHierarchy.pickCategory.id);
						}}
					/>
					<Button
						label='Quit game'
						variant='danger'
						onClick={() => {
							handlePauseStateChange(false);
							setPage(pageHierarchy.home.id);
						}}
					/>
				</PopupCard>
			)}
		</>
	);
}

export { GamePlay };
