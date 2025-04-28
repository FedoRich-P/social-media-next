import { Sidebar } from '@/components/Sidebar';
import { PostFeed } from '@/components/PostFeed';
import { Widgets } from '@/components/Widgets';

export default function Home() {
	return (
		<div className={'min-h-screen max-w-[1400px] mx-auto flex'}>
			<Sidebar />
			<PostFeed />
			<Widgets />
		</div>
	);
}
