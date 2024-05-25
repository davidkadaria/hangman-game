type Props = {
	setPage: (page: string) => void;
	category?: string;
	categories?: string[];
	setCategory?: (category?: string) => void;
	isGamePaused?: boolean;
	setPaused?: (paused: boolean) => void;
};

export type { Props };
