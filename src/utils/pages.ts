import { pageHierarchy } from '../constants';

function isPageValid(page: string): boolean {
	const pageIds = Object.keys(pageHierarchy).map((key) => pageHierarchy[key].id);

	return pageIds.includes(page);
}

export { isPageValid };
