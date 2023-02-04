import React, { useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import AudioRecorder from '../ChatCmp/SendBar/SendBarCmp/AudioRecorder';
import PickFile from '../ChatCmp/SendBar/SendBarCmp/PickFile';
import { chatService } from '@/services/chat.service';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { addMessage } from '@/store/actions/chatActions';
import { utilService } from '@/services/util.service';
import { Chat } from '@/types';

const MsgForm = () => {
	const dispatch = useAppDispatch();
	const { curChat } = useAppSelector(state => state.chatReducer);
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
				const message = chatService.getEmpyMessage(value);
				const type = file
					? file.type.startsWith('image/')
						? 'img'
						: 'video'
					: undefined;
				dispatch(
					addMessage(
						{ ...message, file, timestamp: Date.now(), type },
						(curChat as Chat)._id
					)
				);
				resetForm();
			}}
		>
			{!value && !file && <AudioRecorder />}
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

			{value || file ? (
				<button className="fa-solid fa-paper-plane  h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></button>
			) : (
				''
			)}
			{!value && !file && (
				<span className="fa-solid fa-thumbs-up h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
		</form>
	);
};

export default MsgForm;
