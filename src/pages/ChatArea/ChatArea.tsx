import React from 'react';
import Chat from '@/components/Chat/Chat';
import ChatList from '@/components/ChatList/ChatList';
const ChatArea = () => {
	return (
		<section className="grid grid-cols-[minmax(20vw,380px)_1fr]">
			<ChatList />
			<Chat className="p-8" />
		</section>
	);
};

export default ChatArea;
