import { useState, useEffect } from 'react';
import { Screen } from './components';
import { getQueryParam, setQueryParam } from './utils';
import { pageHierarchy } from './constants';

import './styles/theme.css';
import './styles/main.css';

// Choose the default page to display
const defaultPage: string = pageHierarchy.home.id;

function App() {
	const [currentPage, setCurrentPage] = useState(defaultPage);

	const handleHistoryChange = () => {
		const page = getQueryParam('page') || defaultPage;
		setCurrentPage(page);
		setQueryParam('page', page);
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
			<Screen page={currentPage} />
		</div>
	);
}

export default App;
