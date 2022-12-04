import React from 'react';
import ChatHeader from './ChatHeader';
import MsgList from './Msg/MsgList';
import SendBar from './SendBar';

const Chat = () => {
	return (
		<section className="chat grid-cols-3 ">
			<ChatHeader />
			<MsgList messages={[]} />
			<SendBar />
		</section>
	);
};

export default Chat;
