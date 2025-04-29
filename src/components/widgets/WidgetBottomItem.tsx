import Link from 'next/link';
import Image from 'next/image';
import { WidgetBottomData } from '@/constants/widets';

type Props = WidgetBottomData & {};

export function WidgetBottomItem({ name, nick, src }: Props) {
	return (
		<li
			className={'flex justify-between items-center border-b-1 border-[var(--border-color)] py-2'}>
			<div className={'flex items-center space-x-2'}>
				<Image
					src={src}
					alt={`Profile picture of ${name}`}
					width={56}
					height={56}
					className={
						'object-cover rounded-full overflow-hidden border-1 border-[var(--border-color)]'
					}
				/>
				<div className={'flex items-start mr-2 flex-col w-full space-y-1'}>
					<h3 className={'m-0 font-bold text-sm text-[var(--custom-text)] custom-nowrap'}>
						{name}
					</h3>
					<Link href={'#'} className={'text-md text-[var(--custom-text)]'}>
						{nick}
					</Link>
				</div>
			</div>
			<button className={'bg-[var(--custom-text)] text-white text-sm px-4 rounded-full h-8'}>
				Follow
			</button>
		</li>
	);
}
