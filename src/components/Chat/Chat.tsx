import React, { useEffect } from 'react';
import ChatHeader from './ChatCmp/ChatHeader';
import MsgList from './Msg/MsgList';
import SendBar from './ChatCmp/SendBar/SendBar';
import { useAppDispatch } from '@/store/TypeHooks';
import { useLocation } from 'react-router-dom';
import { setChat } from '@/store/actions/chatActions';

const Chat = (props: { className?: string }) => {
	const location = useLocation();
	const chatId = location.pathname.split('/').at(-1);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!chatId) return;
		dispatch(setChat(chatId));
	}, [chatId]);
	return (
		<section className="chat flex flex-col min-h-screen">
			<ChatHeader className={props.className} />
			<MsgList />
			<SendBar />
		</section>
	);
};

export default Chat;
