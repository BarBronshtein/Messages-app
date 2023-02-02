import { useAppSelector } from '@/store/TypeHooks';
import { Message } from '@/types';
import React from 'react';
import MsgPreview from './MsgPreview';

const MsgList = () => {
	const { curChat } = useAppSelector(state => state.chatReducer);
	const messages = curChat?.messages;
	return (
		<div className="msg-list grow px-4 py-2">
			{messages &&
				messages.map(msg => (
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
