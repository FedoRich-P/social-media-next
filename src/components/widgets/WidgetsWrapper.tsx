import { ReactNode } from 'react';

type Props = {
	title: string;
	children: ReactNode;
};

export function WidgetsWrapper({ title, children }: Props) {
	return (
		<article className={'flex flex-col rounded-xl p-3 bg-[var(--widget-bg)]'}>
			<h2 className={'text-xl font-bold'}>{title}</h2>
			<ul className={'flex flex-col py-2 space-y-3 text-sm text-[var(--widget-text)]'}>
				{children}
			</ul>
		</article>
	);
}
