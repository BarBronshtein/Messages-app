import { utilService } from '@/services/util.service';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import { ChatOption } from '@/types';

type Props = {
	chat: ChatOption;
};
const ChatPreview = (props: Props) => {
	const location = useLocation();
	const chatId = location.pathname.split('/').at(-1);
	return (
		<Link to={`/chats/${props.chat.chatId}`}>
			<div
				className={`profile-preview rounded p-2 flex items-center cursor-pointer hover:bg-slate-200 hover:dark:bg-[rgba(45,136,255,0.1)] ${
					props.chat.chatId === chatId
						? 'bg-slate-200 dark:bg-[rgba(45,136,255,0.1)]'
						: ''
				}`}
			>
				<Avatar imgSize="lg" imgUrl={props.chat.user[0].photo || ''} />
				<div className="flex flex-col pl-3">
					<h4>{props.chat.user[0].fullname}</h4>
					{props.chat.lastMsg && (
						<span className="text-[#65676B] dark:text-[#B0B3B8]">
							{utilService.timeAgo(props.chat.lastMsg.timestamp) + ' '}
							<span>
								{props.chat.lastMsg.txt ? '· ' : ''}
								{props.chat.lastMsg.txt.length > 28
									? `${props.chat.lastMsg.txt.slice(0, 29)}...`
									: props.chat.lastMsg.txt}
							</span>
						</span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ChatPreview;
