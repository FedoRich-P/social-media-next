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
		<li className="w-fit xl:w-full shadow-gradient hover:shadow-gradient-hover border-b-3 border-gray-300 p-2 rounded-lg">
			<Link
				className={`flex items-center gap-2 text-xl space-x-3 font-medium ${
					pathname === '/' ? 'active' : ''
				}`}
				href={'/'}>
				<Icon className={'h-7 m-0'} />
				<span className={'hidden xl:block'}>{text}</span>
			</Link>
		</li>
	);
}
