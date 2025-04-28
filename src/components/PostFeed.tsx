import { PostInput } from '@/components/PostInput';
import { Post } from '@/components/Post';

type Props = {};

export function PostFeed(props: Props) {
	return (
		<section className={'flex-grow flex flex-col gap-5 max-w-2xl p-8'}>
			<h2 className={'text-xl font-bold backdrop-blur-sm'}>Home</h2>
			<PostInput />
			<Post />
		</section>
	);
}
