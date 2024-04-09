import { Home, GamePlay, HowToPlay, PickCategory } from '../pages';
import type { Props as CommonProps } from '../pages/commonTypes';

interface PageHierarchy {
	[key: string]: {
		back: string | null;
		component: React.FC<CommonProps>;
	};
}

const pageHierarchy: PageHierarchy = {
	home: {
		back: null,
		component: Home,
	},
	howToPlay: {
		back: 'home',
		component: HowToPlay,
	},
	pickCategory: {
		back: 'home',
		component: PickCategory,
	},
	gamePlay: {
		back: null,
		component: GamePlay,
	},
};

const defaultPage: string = 'home';

export { pageHierarchy, defaultPage };
