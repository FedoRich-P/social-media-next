import Image from 'next/image';

type Props = {};

export function PostHeader(props: Props) {
	return (
		<article className={'flex p-3 items-start space-x-5'}>
			<Image src={'/man.png'} width={50} height={50} alt={'Posts user photo'} />
			<div className={'text-lg'}>
				<ul className={'flex items-center gap-2 text-[#707e89]'}>
					<li className={'font-bold text-[#0f1419]'}>Guest</li>
					<li>@guest0000234</li>
					<li>.</li>
					<li>a day ago</li>
				</ul>
				<p>fsgsdffgssdf</p>
			</div>
		</article>
	);
}
