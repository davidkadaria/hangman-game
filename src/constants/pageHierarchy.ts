import { Home, GamePlay, HowToPlay, PickCategory } from '../pages';
import type { Props as CommonProps } from '../pages/commonTypes';

interface PageHierarchy {
	[key: string]: {
		id: string;
		component: React.FC<CommonProps>;
	};
}

const pageHierarchy: PageHierarchy = {
	home: {
		id: 'home',
		component: Home,
	},
	howToPlay: {
		id: 'howToPlay',
		component: HowToPlay,
	},
	pickCategory: {
		id: 'pickCategory',
		component: PickCategory,
	},
	gamePlay: {
		id: 'gamePlay',
		component: GamePlay,
	},
};

const defaultPage: string = 'home';

export { pageHierarchy, defaultPage };
