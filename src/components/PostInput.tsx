import Image from 'next/image';
import {
	CalendarIcon,
	ChartBarIcon,
	FaceSmileIcon,
	MapPinIcon,
	PhotoIcon,
} from '@heroicons/react/24/outline';

type Props = {};

export function PostInput(props: Props) {
	return (
		<div className={'flex gap-2 p-2 items-center  border-1 rounded-lg border-zinc-200'}>
			<Image src={'/globe.svg'} width={44} height={4} alt={'Logo'} className={'self-start'} />
			<div className={'w-full p-1 border-l border-l-stone-300'}>
				<textarea
					className={'w-full h-full p-1 mb-1 border-b border-b-stone-300'}
					placeholder={'Enter your message...'}></textarea>
				<div className={'flex justify-between'}>
					<ul className={'flex items-center gap-2.5'}>
						<li>
							<PhotoIcon className={'input-icon'} />
						</li>
						<li>
							<ChartBarIcon className={'input-icon'} />
						</li>
						<li>
							<FaceSmileIcon className={'input-icon'} />
						</li>
						<li>
							<CalendarIcon className={'input-icon'} />
						</li>
						<li>
							<MapPinIcon className={'input-icon'} />
						</li>
					</ul>
					<button className={'btn-primary w-30 h-10'}>Bumble</button>
				</div>
			</div>
		</div>
	);
}
