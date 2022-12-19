import React from 'react';
import ChatHeader from './ChatCmp/ChatHeader';
import MsgList from './Msg/MsgList';
import SendBar from './ChatCmp/SendBar/SendBar';

const Chat = (props: { className?: string }) => {
	return (
		<section className="chat flex flex-col min-h-screen">
			<ChatHeader
				user={{ email: 'i101', fullname: 'Barry Bravov', photo: '', _id: 'i111' }}
				className={props.className}
			/>
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
