import { useState, useEffect, useCallback, useMemo } from 'react';
import {
	getQueryParam,
	setQueryParam,
	removeQueryParam,
	isPageValid,
	getCategories,
	isValidCategory,
} from './utils';
import { pageHierarchy, defaultPage } from './constants';

import './styles/theme.css';
import './styles/main.css';
import './App.css';

function App() {
	const [currentPage, setCurrentPage] = useState<string>(defaultPage);
	const [currentCategory, setCurrentCategory] = useState<string>();

	const categories = useMemo(() => getCategories(), []);

	const setPage = useCallback((page: string): void => {
		setCurrentPage(page);
		setQueryParam('page', page);
	}, []);

	const setCategory = useCallback(
		(category?: string): void => {
			if (!category || !isValidCategory(category, categories)) {
				setCurrentCategory(undefined);
				removeQueryParam('category');
			} else {
				setCurrentCategory(category);
				setQueryParam('category', category);
			}
		},
		[categories]
	);

	const handleHistoryChange = useCallback(() => {
		const page = getQueryParam('page') || defaultPage;
		const category = getQueryParam('category');

		setPage(page);
		category && page === pageHierarchy.gamePlay.id && setCategory(category);
	}, [setPage, setCategory]);

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

	if (currentPage === pageHierarchy.pickCategory.id && currentCategory) {
		setPage(pageHierarchy.gamePlay.id);
	} else if (currentPage !== pageHierarchy.gamePlay.id && currentCategory) {
		setCategory();
	} else if (
		currentPage === pageHierarchy.gamePlay.id &&
		(!currentCategory || !isValidCategory(currentCategory, categories))
	) {
		setPage(pageHierarchy.pickCategory.id);
	}

	const pageProps = {
		setPage,
		...(currentPage === pageHierarchy.pickCategory.id && { categories, setCategory }),
		...(currentPage === pageHierarchy.gamePlay.id && { category: currentCategory }),
	};

	return <div className='App'>{pageHierarchy[currentPage].component(pageProps)}</div>;
}

export default App;
