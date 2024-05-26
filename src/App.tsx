import { Routes, Route } from 'react-router-dom';
import { Home, HowToPlay, PickCategory, GamePlay, NotFound } from './pages';

import './styles/theme.css';
import './styles/main.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/how-to-play' element={<HowToPlay />} />
				<Route path='/pick-category' element={<PickCategory />} />
				<Route path='/game-play/:category' element={<GamePlay />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
