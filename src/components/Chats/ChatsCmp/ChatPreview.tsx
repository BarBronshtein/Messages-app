import { utilService } from '@/services/util.service';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import { ChatOption } from '@/types';
import { setContact } from '@/store/actions/chatActions';
import { useAppDispatch } from '@/store/TypeHooks';

type Props = {
	chat: ChatOption;
};
const ChatPreview = (props: Props) => {
	const dispatch = useAppDispatch();
	const setUser = () => dispatch(setContact(props.chat.user[0]));
	return (
		<Link onClick={() => setUser()} to={`/chats/${props.chat.chatId}`}>
			<div className="profile-preview rounded p-2 flex items-center cursor-pointer hover:bg-slate-200">
				<Avatar imgSize="lg" imgUrl={props.chat.user[0].imgUrl} />
				<div className="flex flex-col pl-3">
					<h4>{props.chat.user[0].fullname}</h4>
					<p className="text-[#65676B]"></p>
					{props.chat.lastMsg && (
						<span>
							{utilService.timeAgo(props.chat.lastMsg.timestamp) + ' '}
							<span>
								{props.chat.lastMsg.txt ? '·' : ''}
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
