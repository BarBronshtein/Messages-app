import { useAppSelector } from '@/store/TypeHooks';
import React, { useEffect, useRef } from 'react';
import MsgPreview from './MsgPreview';

const MsgList = () => {
	const ref = useRef<HTMLDivElement>(null);
	const scrollToBottom = () => {
		const myDiv = ref.current as HTMLDivElement;
		myDiv.scrollTop = myDiv.scrollHeight;
	};
	const { curChat } = useAppSelector(state => state.chatReducer);
	useEffect(() => {
		scrollToBottom();
	}, [curChat?._id]);
	const messages = curChat?.messages;
	return (
		<div ref={ref} className="msg-list grow px-4 py-2 overflow-y-auto">
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
