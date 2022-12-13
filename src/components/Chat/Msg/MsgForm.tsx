import React, { useEffect, useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import AudioRecorder from '../ChatCmp/SendBar/SendBarCmp/AudioRecorder';
import PickFile from '../ChatCmp/SendBar/SendBarCmp/PickFile';

const MsgForm = () => {
	const [isTexting, setIsTexting] = useState(false);
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;
	const { register, resetForm } = useFormRegister({ msg: '' }, () => {});
	const { value } = register('msg');
	const auto_height = (elem: HTMLTextAreaElement) => {
		elem.style.height = '1px';
		elem.style.height = elem.scrollHeight + 'px';
		return;
	};
	useEffect(() => {
		if (!isTexting && value) return setIsTexting(true);
		if (isTexting && !value) return setIsTexting(false);
	}, [value]);
	return (
		<form
			className="w-full flex"
			onSubmit={ev => {
				ev.preventDefault();
				// Disptach event to add a message
				resetForm();
			}}
		>
			{!isTexting && <AudioRecorder />}
			{isMobile && !isTexting && (
				<span className="fa-solid fa-camera hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			{!isTexting && <PickFile />}
			<div className="input-group relative grow">
				<textarea
					cols={20}
					rows={1}
					placeholder="Message"
					className="w-full text-black rounded-3xl border-none outline-none px-4 py-1  text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden "
					{...register('msg')}
					onInput={ev => auto_height(ev.target as HTMLTextAreaElement)}
				></textarea>
				{!register('msg').value && (
					<span className="fa-solid fa-face-smile absolute right-4 top-[0.65rem] sm:top-[0.65rem]"></span>
				)}
			</div>

			{isTexting && (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					aria-hidden="true"
					className="h-4 relative top-3 sm:h-5 sm:top-2 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
				</svg>
			)}
			{!isTexting && (
				<span className="fa-solid fa-thumbs-up cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
		</form>
	);
};

export default MsgForm;
