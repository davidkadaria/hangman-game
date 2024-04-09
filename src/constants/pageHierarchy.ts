interface PageHierarchy {
	[key: string]: {
		id: string;
		back: string | null;
	};
}

const pageHierarchy: PageHierarchy = {
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
