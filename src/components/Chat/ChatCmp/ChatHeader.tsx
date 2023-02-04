import { getContactById } from '@/store/actions/chatActions';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { User } from '@/types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Avatar';

const ChatHeader = ({ className }: { className?: string }) => {
	const dispatch = useAppDispatch();
	const { curChat } = useAppSelector(state => state.chatReducer);
	useEffect(() => {
		dispatch(getContactById(curChat?.userId ?? ''));
	}, [curChat?._id]);
	const user = useAppSelector(state => state.chatReducer.curContact);
	const sendTo = '/chats/';
	return (
		<header
			className={`chat-header shadow-[inset_0_0_4px] shadow-[#00000033] items-center flex justify-around p-2 text-lg sm:text-xl ${className}`}
		>
			<Link to={sendTo}>
				<span className="fa-solid text-blue-600 fa-arrow-left cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			</Link>
			<div className="flex grow ml-8 items-center">
				<Avatar imgSize="md" imgUrl={user?.photo || ''} />
				<span className="ml-4">{user?.fullname}</span>
			</div>
			<span className="fa-solid fa-circle-info text-blue-600 cursor-pointer hover:bg-[#4444] p-2 hover:rounded-full hover:cursor-not-allowed"></span>
		</header>
	);
};

export default ChatHeader;
