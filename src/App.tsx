import { useState, useEffect } from 'react';
import { Screen } from './components';
import { getQueryParam, setQueryParam } from './utils';

import './styles/theme.css';
import './styles/main.css';

function App() {
	const [currentTab, setCurrentTab] = useState('home');

	const handleHistoryChange = () => {
		const tab = getQueryParam('tab') || 'home';
		setCurrentTab(tab);
		setQueryParam('tab', tab);
	};

	useEffect(() => {
		// Run handleHistoryChange when the component mounts
		handleHistoryChange();

		// Add an event listener to listen for changes to the history
		window.addEventListener('popstate', handleHistoryChange);

		// Clean up
		return () => {
			window.removeEventListener('popstate', handleHistoryChange);
		};
	}, []);

	return (
		<div className='App'>
			<Screen page={currentTab} />
		</div>
	);
}

export default App;
