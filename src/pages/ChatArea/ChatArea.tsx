import React, { ReactElement, useEffect } from 'react';
import Chat from '@/components/Chat/Chat';
import ChatList from '@/components/ChatList/ChatList';
import { useParams } from 'react-router-dom';
import DefaultChat from '@/components/Chat/ChatCmp/DefaultChat';

const ChatArea = () => {
	const { id } = useParams();

	return (
		<section className="grid grid-cols-[minmax(20vw,380px)_1fr]">
			<ChatList />
			{id ? <Chat className="p-8" /> : <DefaultChat className="p-8" />}
		</section>
	);
};

export default ChatArea;
