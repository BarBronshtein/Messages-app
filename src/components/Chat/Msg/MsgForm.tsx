import React, { useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import AudioRecorder from '../ChatCmp/SendBar/SendBarCmp/AudioRecorder';
import PickFile from '../ChatCmp/SendBar/SendBarCmp/PickFile';
import { chatService } from '@/services/chat.service';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { addMessage } from '@/store/actions/chatActions';
import { Chat, Message } from '@/types';
import { ISocketTypes, socketService } from '@/services/socket.service';
import { utilService } from '@/services/util.service';

const MsgForm = () => {
	const dispatch = useAppDispatch();
	const { curChat, chats } = useAppSelector(state => state.chatReducer);
	const [file, setFile] = useState<File | null>(null);

	const getType = (file: File | null) => {
		if (!file) return undefined;
		return file.type.startsWith('image/') ? 'img' : 'video';
	};

	const emitConversationUpdate = (message: Message) =>
		socketService.emit(ISocketTypes.EMIT_CONVERSATION_UPDATE, {
			lastMsg: message.txt || getType(file),
			timestamp: Date.now(),
			chatId: curChat?._id,
			_id: chats?.find(chat => chat.chatId === curChat?._id)?._id,
		});

	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;

	// replace useRef instead of useFormRegister
	const { register, resetForm } = useFormRegister({ msg: '' }, () => {});
	const { value } = register('msg');
	return (
		<form
			className="w-full flex relative"
			onSubmit={ev => {
				ev.preventDefault();
				const message = chatService.getEmpyMessage(value);
				const type = getType(file);
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
				<PickFile
					file={file}
					className="fa-camera"
					setFile={setFile}
					capture="environment"
				/>
			)}
			<PickFile file={file} className="fa-image" setFile={setFile} />
			<div className="input-group relative grow">
				<textarea
					cols={20}
					rows={1}
					placeholder="Message"
					className="w-full text-black rounded-3xl border-none outline-none pl-4 pr-[2.25rem] py-1 max-h-[225px] text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden dark:bg-[#3A3B3C] dark:text-light"
					{...register('msg')}
					onInput={ev => utilService.auto_height(ev.target as HTMLTextAreaElement)}
				></textarea>

				<span className="fa-solid h-fit fa-face-smile absolute right-4 top-[0.65rem] sm:top-[0.65rem] hover:cursor-not-allowed"></span>
			</div>

			{value || file ? (
				<button className="fa-solid fa-paper-plane  h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></button>
			) : (
				''
			)}
			{!value && !file && (
				<span
					className="fa-solid fa-thumbs-up h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"
					onClick={() => {
						const message = chatService.getEmpyMessage('👍');
						dispatch(
							addMessage(
								{ ...message, file: null, timestamp: Date.now() },
								(curChat as Chat)._id
							)
						);
					}}
				></span>
			)}
		</form>
	);
};

export default MsgForm;
