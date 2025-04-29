import { Sidebar } from '@/components/Sidebar';
import { PostFeed } from '@/components/post/PostFeed';
import { Widgets } from '@/components/widgets/Widgets';
import { SignUpPrompts } from '@/components/SignUpPrompts';

export default function Home() {
	return (
		<>
			<div className={'min-h-screen max-w-[1400px] mx-auto flex justify-center'}>
				<Sidebar />
				<PostFeed />
				<Widgets />
			</div>
			<SignUpPrompts />
		</>
	);
}
