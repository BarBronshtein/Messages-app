import React from 'react';
import MsgPreview, { Message } from './Msg/Msg';
type Props = {
	messages: Message[];
};
const MsgList = ({ messages }: Props) => {
	return (
		<div>
			{messages.map(msg => (
				<MsgPreview txt={msg.txt} url={msg.url} type={msg.type} />
			))}
		</div>
	);
};

export default MsgList;
