import { useState, useEffect, useCallback } from 'react';
import { getQueryParam, setQueryParam, isPageValid } from './utils';
import { pageHierarchy, defaultPage } from './constants';

import './styles/theme.css';
import './styles/main.css';

function App() {
	const [currentPage, setCurrentPage] = useState<string>(defaultPage);

	const setPage = useCallback((page: string) => {
		setCurrentPage(page);
		setQueryParam('page', page);
	}, []);

	const handleHistoryChange = useCallback(() => {
		const page = getQueryParam('page') || defaultPage;
		setPage(page);
	}, [setPage]);

	useEffect(() => {
		handleHistoryChange();
		// Add an event listener to listen for changes to the history
		window.addEventListener('popstate', handleHistoryChange);

		// Clean up
		return () => {
			window.removeEventListener('popstate', handleHistoryChange);
		};
	}, [handleHistoryChange]);

	if (isPageValid(currentPage) === false) {
		setPage(defaultPage);
	}

	return <div className='App'>{pageHierarchy[currentPage].component({ setPage })}</div>;
}

export default App;
