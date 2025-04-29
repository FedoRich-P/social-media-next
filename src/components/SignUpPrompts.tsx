import { SignUpModal } from '@/components/modals/SignUpModal';

export function SignUpPrompts() {
	return (
		<footer
			className={
				'fixed bottom-0 w-full h-[var(--footer-height)] flex items-center justify-center space-x-5 bg-[var(--next-color)]'
			}>
			<div className={'hidden md:flex  flex-col text-white'}>
				<h3 className={'text-xl font-bold'}>Don`t miss out on the buzz</h3>
				<p>People on Busy Bee are always the first to know</p>
			</div>
			<div className={'flex gap-3 items-center justify-center'}>
				<button className={'btn-primary w-30 h-10 border-1 border-white'}>Log In</button>
				<SignUpModal />
			</div>
		</footer>
	);
}
