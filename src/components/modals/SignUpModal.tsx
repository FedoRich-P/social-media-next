'use client';

import { Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectCount, toggleSignUpModal } from '@/redux/slices/modalSlice';
import { EyeIcon } from '@heroicons/react/24/outline';

export function SignUpModal() {
	const dispatch = useAppDispatch();
	const open = useAppSelector(selectCount);

	function handleClose() {
		dispatch(toggleSignUpModal(false));
	}

	function handleOpen() {
		dispatch(toggleSignUpModal(true));
	}

	return (
		<>
			<button onClick={handleOpen} className={'btn-secondary w-30 h-10'}>
				Sign Up
			</button>
			<Modal open={open} onClose={handleClose} className={'flex justify-center items-center'}>
				<article className={'w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white'}>
					<form
						className={'flex flex-col items-center pt-10 pb-20 px-4 space-y-5 sm:px-20'}
						onSubmit={handleClose}>
						<h2 className={'text-3xl font-bold mb-10'}>Create your account</h2>
						<input name={'name'} className={'input-modal'} type="name" placeholder={'Name'} />
						<input
							name={'email'}
							className={'input-modal'}
							type="email"
							placeholder={'Email Address'}
						/>
						<div className="relative w-full">
							<EyeIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
							<input
								name={'password'}
								className={'input-modal'}
								type="password"
								placeholder={'Password'}
							/>
						</div>
						<button className={'btn-primary w-full h-14'}>Log In</button>
						<span>or</span>
						<button className={'btn-primary w-full h-14 '}>Log In as Guest</button>
					</form>
				</article>
			</Modal>
		</>
	);
}
