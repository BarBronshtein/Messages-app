import React from 'react';
import MsgPreview, { Msg } from './Msg';
type Props = {
	msgList: Msg[];
};
const MsgList = ({ msgList }: Props) => {
	return (
		<div>
			{msgList.map(msg => (
				<MsgPreview txt={msg.txt} url={msg.url} type={msg.type} />
			))}
		</div>
	);
};

export default MsgList;
