'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

type Props = {
	text: string;
	Icon: ElementType;
};

export function SidebarLink({ text, Icon }: Props) {
	const pathname = usePathname();

	return (
		<li className="w-fit xl:w-full bg-[var(--widget-bg)] shadow-gradient hover:shadow-gradient-hover border-b-3 border-gray-300 p-2 rounded-lg">
			<Link
				className={`flex gap-3 items-center p-2 text-lg font-medium ${
					pathname === '/' ? 'active' : ''
				}`}
				href={'/'}>
				<Icon className={'h-7 m-0'} />
				<span className={'hidden xl:block'}>{text}</span>
			</Link>
		</li>
	);
}
