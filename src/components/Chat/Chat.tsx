import React from 'react';
import ChatHeader from './ChatHeader';
import MsgList from './Msg/MsgList';
import SendBar from './SendBar';

const Chat = () => {
	return (
		<section className="chat flex flex-col min-h-screen">
			<ChatHeader />
			<MsgList
				messages={[
					{
						id: 'i101',
						fromUser: '123456',
						txt: 'hi how are you',
					},
					{
						id: 'i102',
						fromUser: 'currentUser',
						txt: 'Im good how r u?',
					},
				]}
			/>
			<SendBar />
		</section>
	);
};

export default Chat;
