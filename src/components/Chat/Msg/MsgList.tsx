import React from 'react';
import MsgPreview, { Message } from './Msg';
type Props = {
	messages: Message[];
};
const MsgList = ({ messages }: Props) => {
	return (
		<div className="col-start-2">
			{messages.map(msg => (
				<MsgPreview txt={msg.txt} url={msg.url} type={msg.type} />
			))}
		</div>
	);
};

export default MsgList;
