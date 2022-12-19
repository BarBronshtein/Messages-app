import { utilService } from '@/services/util.service';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import { ChatOption } from './ChatList';
type Props = {
	chat: ChatOption;
};
const ChatPreview = (props: Props) => {
	return (
		<Link to={`/chats/${props.chat.chatId}`}>
			<div className="profile-preview rounded p-2 flex items-center cursor-pointer hover:bg-slate-200">
				<Avatar imgSize="lg" imgUrl={props.chat.imgUrl} />
				<div className="flex flex-col pl-3">
					<h4>{props.chat.fullname}</h4>
					<p className="text-[#65676B]"></p>
					{props.chat.lastMsg && (
						<span>
							{utilService.timeAgo(props.chat.lastMsg.timestamp)}{' '}
							<span>
								·
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
