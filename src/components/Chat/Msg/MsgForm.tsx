import React, { useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import AudioRecorder from '../ChatCmp/SendBar/SendBarCmp/AudioRecorder';
import PickFile from '../ChatCmp/SendBar/SendBarCmp/PickFile';
import { chatService } from '@/services/chat.service';

const MsgForm = () => {
	const [file, setFile] = useState<File | null>(null);

	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;

	const { register, resetForm } = useFormRegister({ msg: '' }, () => {});
	const { value } = register('msg');
	const auto_height = (el: HTMLTextAreaElement) => {
		el.style.height = '1px';
		el.style.height = el.scrollHeight + 'px';
		if (parseInt(el.style.height) > 225) el.style.overflowY = 'scroll';
		else el.style.overflowY = 'hidden';
	};

	return (
		<form
			className="w-full flex relative"
			onSubmit={ev => {
				ev.preventDefault();
				// Disptach event to add a message
				const message = chatService.getEmpyMessage(value);
				chatService.addMessage({ ...message, timestamp: Date.now(), file }, '123');
				resetForm();
			}}
		>
			{!value && <AudioRecorder />}
			{isMobile && !value && (
				<span className="fa-solid fa-camera h-fit hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			<PickFile file={file} setFile={setFile} />
			<div className="input-group relative grow">
				<textarea
					cols={20}
					rows={1}
					placeholder="Message"
					className="w-full text-black rounded-3xl border-none outline-none pl-4 pr-[2.25rem] py-1 max-h-[225px] text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden "
					{...register('msg')}
					onInput={ev => auto_height(ev.target as HTMLTextAreaElement)}
				></textarea>

				<span className="fa-solid h-fit fa-face-smile absolute right-4 top-[0.65rem] sm:top-[0.65rem]"></span>
			</div>

			{value && (
				<button className="flex">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 24 24"
						aria-hidden="true"
						className="h-4 relative top-3 sm:h-5 sm:top-2 cursor-pointer hover:bg-[#4444] rounded-3xl"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
					</svg>
				</button>
			)}
			{!value && (
				<span className="fa-solid fa-thumbs-up h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
		</form>
	);
};

export default MsgForm;
