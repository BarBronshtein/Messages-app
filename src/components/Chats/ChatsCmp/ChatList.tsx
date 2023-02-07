import { ChatOption } from '@/types';
import React from 'react';
import ChatPreview from './ChatPreview';

type Props = {
	chats: ChatOption[];
};
const ChatList = (props: Props) => {
	return (
		<div className="grow overflow-y-auto">
			{props.chats.map(chat => (
				<ChatPreview key={chat._id} chat={chat} />
			))}
		</div>
	);
};

export default ChatList;
