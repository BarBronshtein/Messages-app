import React from 'react';
import Chat from '@/components/Chat/Chat';
import Chats from '@/components/Chats/Chats';
import { useParams } from 'react-router-dom';
import DefaultChat from '@/components/Chat/ChatCmp/DefaultChat';

const ChatArea = () => {
	const { id } = useParams();

	return (
		<section className="grid grid-cols-[minmax(20vw,380px)_1fr]">
			<Chats />
			{id ? <Chat className="py-8" /> : <DefaultChat />}
		</section>
	);
};

export default ChatArea;
