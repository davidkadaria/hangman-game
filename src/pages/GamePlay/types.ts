type Character = {
	symbol: string;
	guessed: boolean;
};

type Word = {
	word: Character[];
};

export type { Word };
