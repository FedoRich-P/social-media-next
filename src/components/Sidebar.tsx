'use client';

import { SidebarLink } from '@/components/SidebarLink';
import {
	HashtagIcon,
	HomeIcon,
	BellIcon,
	InboxIcon,
	UserIcon,
	BookmarkIcon,
	EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export function Sidebar() {
	return (
		<aside
			className={
				'h-[calc(100vh-var(--footer-height))] overflow-y-auto w-fit xl:min-w-85 sticky top-0'
			}>
			<nav className={'h-full bg-white shadow-gradient hidden sm:flex flex-col  p-3'}>
				<div className={'p-3'}>
					<Image src={'/globe.svg'} width={48} height={48} alt={'Logo'} />
				</div>
				<ul className={'flex items-center flex-col space-y-3 p-2'}>
					<SidebarLink text={'Home'} Icon={HomeIcon} />
					<SidebarLink text={'Explore'} Icon={HashtagIcon} />
					<SidebarLink text={'Notification'} Icon={BellIcon} />
					<SidebarLink text={'Messages'} Icon={InboxIcon} />
					<SidebarLink text={'Bookmarks'} Icon={BookmarkIcon} />
					<SidebarLink text={'Profile'} Icon={UserIcon} />
					<SidebarLink text={'More'} Icon={EllipsisHorizontalCircleIcon} />
					<li className={'mt-3 self-end hidden xl:block'}>
						<button className={'btn-primary w-52 h-12'}>Bumble</button>
					</li>
				</ul>
				<Link
					href={'/'}
					className={
						'absolute left-1/2 -translate-x-1/2 transform bottom-10 flex items-center gap-2 text-xl space-x-3 font-medium z-500'
					}>
					<Image src={'/profile.png'} width={45} height={45} alt={'Profile photo'} />
				</Link>
			</nav>
		</aside>
	);
}
