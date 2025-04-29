import { PostHeader } from '@/components/post/PostHeader';
import {
	ArrowUpTrayIcon,
	ChartBarIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
} from '@heroicons/react/24/outline';

type Props = {};

export function Post(props: Props) {
	return (
		<article className={'border-b-[2px] border-b-[var(--border-color)]'}>
			<PostHeader />
			<footer className={'ml-auto w-[50%]'}>
				<ul className={'hidden xl:flex p-3 items-center justify-evenly'}>
					<li className={'flex items-start gap-2'}>
						<ChatBubbleOvalLeftEllipsisIcon className={'post-icon'} />
						<span className={'text-sm'}>2</span>
					</li>
					<li className={'flex items-start gap-2'}>
						<HeartIcon className={'post-icon'} />
						<span className={'text-sm'}>2</span>
					</li>
					<li>
						<ChartBarIcon className={'post-icon'} />
					</li>
					<li>
						<ArrowUpTrayIcon className={'post-icon'} />
					</li>
				</ul>
			</footer>
		</article>
	);
}
