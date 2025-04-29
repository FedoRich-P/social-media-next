export type WidgetTopData = {
	title: string;
	subtitle: string;
	count: number;
};

export const widgetTopData: WidgetTopData[] = [
	{ title: 'ReactJS', subtitle: 'Trending in Australia', count: 240 },
	{ title: 'Angular', subtitle: 'Trending in Australia', count: 14 },
	{ title: 'Donald Trump', subtitle: 'Trending in Australia', count: 200 },
	{ title: 'JavaScript', subtitle: 'Trending in Australia', count: 190 },
];

export type WidgetBottomData = {
	name: string;
	nick: string;
	src: string;
};

export const widgetBottomData: WidgetBottomData[] = [
	{ name: 'Iman Musa', nick: '@imanmcodes', src: '' },
	{ name: 'Elon Musk', nick: '@elonmusk', src: '' },
	{ name: 'Kim Kardashian', nick: '@kimka', src: '' },
];
