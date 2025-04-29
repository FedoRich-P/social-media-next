import Link from 'next/link';
import { ElementType } from 'react';
import { WidgetTopData } from '@/constants/widets';

type Props = WidgetTopData & {
	Icon: ElementType;
};

export function WidgetTopItem({ title, subtitle, count, Icon }: Props) {
	return (
		<li className={'flex flex-col items-start border-b-1 border-[var(--border-color)] py-2'}>
			<div className={'flex w-full mb-1 justify-between items-end gap-2'}>
				{subtitle}
				<Icon className={'w-5 h-5'} />
			</div>
			<Link href={'#'} className={'font-bold text-md text-[var(--custom-text)]'}>
				#{title}
			</Link>
			<span>{count}k Bumbles</span>
		</li>
	);
}
