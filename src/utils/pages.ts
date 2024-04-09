import { pageHierarchy } from '../constants';

function isPageValid(page: string): boolean {
	const pageIds = Object.keys(pageHierarchy);

	return pageIds.includes(page);
}

export { isPageValid };
