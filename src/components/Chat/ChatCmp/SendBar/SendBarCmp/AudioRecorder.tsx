import { useAudioRecorder } from '@/CustomHooks/useAudioRedcorder';
import './AudioRecorder.css';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { chatService } from '@/services/chat.service';
import { addMessage } from '@/store/actions/chatActions';
import { Chat } from '@/types';

const AudioRecorder = () => {
	const dispatch = useAppDispatch();
	const { curChat, chats } = useAppSelector(state => state.chatReducer);

	const curConversation = chats?.find(chat => chat.chatId === curChat?._id)!;

	const { startRecording, stopRecording, audioResult, status } =
		useAudioRecorder();
	useEffect(() => {
		if (!audioResult) return;
		// Do something
		const message = chatService.getEmpyMessage();
		dispatch(
			addMessage(
				{ ...message, file: audioResult, type: 'audio', timestamp: Date.now() },
				(curChat as Chat)._id,
				curConversation
			)
		);
	}, [audioResult]);
	return (
		<>
			<span
				title="Click and Hold"
				onTouchStart={() => startRecording()}
				onMouseDown={() => startRecording()}
				onTouchEnd={() => stopRecording()}
				onMouseUp={() => stopRecording()}
				className={`fa-solid fa-microphone ${
					status === 'idle' ? '' : 'blink'
				} cursor-pointer hover:bg-[#4444] hover:rounded-full h-fit p-2`}
			></span>
		</>
	);
};

export default AudioRecorder;
