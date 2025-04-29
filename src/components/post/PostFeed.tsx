import { PostInput } from '@/components/post/PostInput';
import { Post } from '@/components/post/Post';

export function PostFeed() {
	return (
		<main className={'flex-grow flex flex-col gap-5 max-w-2xl p-8'}>
			<h2 className={'text-xl font-bold backdrop-blur-sm'}>Home</h2>
			<PostInput />
			<Post />
		</main>
	);
}
