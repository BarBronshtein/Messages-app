import React, { useEffect, useState } from 'react';
import ChatHeader from './ChatCmp/ChatHeader';
import MsgList from './Msg/MsgList';
import SendBar from './ChatCmp/SendBar/SendBar';
import { useAppDispatch } from '@/store/TypeHooks';
import { useLocation } from 'react-router-dom';
import { setChat, clearChat } from '@/store/actions/chatActions';

const Chat = (props: { className?: string }) => {
	const [controller, setController] = useState<AbortController>(null!);

	const location = useLocation();
	const chatId = location.pathname.split('/').at(-1);

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (!chatId) return;
		if (controller) controller.abort();
		const newController = new AbortController();
		setController(newController);
		dispatch(setChat(chatId, newController.signal));
		return () => {
			dispatch(clearChat());
		};
	}, [chatId]);
	return (
		<section className="chat flex flex-col min-h-screen h-screen dark:bg-[#242526] dark:text-white">
			<ChatHeader className={props.className} />
			<MsgList />
			<SendBar />
		</section>
	);
};

export default Chat;
