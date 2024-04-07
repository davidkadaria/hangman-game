const pageHierarchy = {
	home: {
		id: 'home',
		back: null,
	},
	howToPlay: {
		id: 'howToPlay',
		back: 'home',
	},
	pickCategory: {
		id: 'pickCategory',
		back: 'home',
	},
	play: {
		id: 'gamePlay',
		back: null,
	},
};

export { pageHierarchy };
