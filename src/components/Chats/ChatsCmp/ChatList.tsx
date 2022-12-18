import React from 'react';
import ChatPreview from './ChatPreview';
export type Chat = {
	fullname: string;
	lastMsg?: { txt: string; timestamp: number };
	imgUrl: string;
	_id: string;
	chatId: string;
};
type Props = {
	chats: Chat[];
};
const ChatList = (props: Props) => {
	return (
		<div className="grow">
			{props.chats.map(chat => (
				<ChatPreview key={chat._id} chat={chat} />
			))}
		</div>
	);
};

export default ChatList;