import React, { useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import AudioRecorder from '../ChatCmp/SendBar/SendBarCmp/AudioRecorder';
import PickFile from '../ChatCmp/SendBar/SendBarCmp/PickFile';
import { chatService } from '@/services/chat.service';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { addMessage } from '@/store/actions/chatActions';
import { Message } from '@/types';
import { ISocketTypes, socketService } from '@/services/socket.service';
import { userService } from '@/services/user.service';
import MessageInput from './MsgFormCmp/MessageInput';
import ThumbIcon from './MsgFormCmp/ThumbIcon';

const MsgForm = () => {
	const dispatch = useAppDispatch();
	const { curChat, chats } = useAppSelector(state => state.chatReducer);
	const [file, setFile] = useState<File | null>(null);

	const add = (msg: Message) =>
		dispatch(
			addMessage({ ...msg, file: null, timestamp: Date.now() }, curChat!._id)
		);

	const getType = (file: File | null): 'img' | 'video' | undefined => {
		if (!file) return;
		return file.type.startsWith('image/') ? 'img' : 'video';
	};

	const emitConversation = (message: Message) =>
		socketService.emit(ISocketTypes.CLIENT_EMIT_CONVERSATION_UPDATE, {
			lastMsg: message.txt || getType(file),
			timestamp: Date.now(),
			chatId: curChat!._id,
			user: [userService.getLoggedInUser()],
			_id: chats!.find(chat => chat.chatId === curChat!._id)!._id,
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
				const emptyMessage = chatService.getEmpyMessage(value);
				const type = getType(file);
				const message = { ...emptyMessage, file, timestamp: Date.now(), type };
				dispatch(addMessage(message, curChat!._id));
				emitConversation(message);
				resetForm();
			}}
		>
			{/* Audio */}
			{!value && !file && <AudioRecorder />}
			{/* Camera */}
			{isMobile && !value && (
				<PickFile
					file={file}
					className="fa-camera"
					setFile={setFile}
					capture="environment"
				/>
			)}
			{/* Image/video selector */}
			<PickFile file={file} className="fa-image" setFile={setFile} />
			{/* Message textarea */}
			<MessageInput register={register} />
			{/* Send button */}
			{value || file ? (
				<button className="fa-solid fa-paper-plane  h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></button>
			) : (
				''
			)}
			{/* Thumb up icon */}
			{!value && !file && <ThumbIcon addMessage={add} />}
		</form>
	);
};

export default MsgForm;
