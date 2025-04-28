import { PostHeader } from '@/components/PostHeader';

type Props = {};

export function Post(props: Props) {
	return (
		<div className={'border-b-[2px] border-b-[var(--border-color)]'}>
			<PostHeader />
		</div>
	);
}
