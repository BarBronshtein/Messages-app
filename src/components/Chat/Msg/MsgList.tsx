import React from 'react';
import MsgPreview, { Message } from './MsgPreview';
type Props = {
	messages: Message[];
};
const MsgList = ({ messages }: Props) => {
	return (
		<div className="msg-list grow px-4 py-2">
			{messages.map(msg => (
				<MsgPreview
					key={msg.id}
					fromUser={msg.fromUser}
					id={msg.id}
					txt={msg.txt}
					type={msg.type}
					url={msg.url}
				/>
			))}
		</div>
	);
};

export default MsgList;
