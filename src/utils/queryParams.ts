const getQueryParam = (key: string) => {
	const queryParams = new URLSearchParams(window.location.search);
	return queryParams.get(key);
};

const setQueryParam = (key: string, value: string) => {
	const queryParams = new URLSearchParams(window.location.search);
	queryParams.set(key, value);
	window.history.pushState({}, '', `${window.location.pathname}?${queryParams}`);
};

const removeQueryParam = (key: string) => {
	const queryParams = new URLSearchParams(window.location.search);
	queryParams.delete(key);
	window.history.pushState({}, '', `${window.location.pathname}?${queryParams}`);
};

export { getQueryParam, setQueryParam, removeQueryParam };
