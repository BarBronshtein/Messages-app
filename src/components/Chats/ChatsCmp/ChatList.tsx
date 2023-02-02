import { ChatOption } from '@/types';
import React from 'react';
import ChatPreview from './ChatPreview';

type Props = {
	chats: ChatOption[];
};
const ChatList = (props: Props) => {
	return (
		<div className="grow">
			{props.chats.map(chat => (
				<ChatPreview key={chat.chatId} chat={chat} />
			))}
		</div>
	);
};

export default ChatList;
