import { pageHierarchy } from '../constants';

function isPageValid(page: string): boolean {
	// Get array of page IDs
	const pageIds = Object.keys(pageHierarchy).map((key) => pageHierarchy[key].id);

	if (pageIds.includes(page)) {
		return true;
	}

	return false;
}

export { isPageValid };
