import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Avatar';
export type User = {
	_id: string;
	fullname: string;
	photo?: string;
	email: string;
	bio?: string;
	phone?: string;
};

const ChatHeader = ({
	className,
	user,
}: {
	className?: string;
	user: User;
}) => {
	const sendTo = '/chats/';
	return (
		<header
			className={`chat-header shadow-[inset_0_0_4px] shadow-[#00000033] items-center flex justify-around p-2 text-lg sm:text-xl ${className}`}
		>
			<Link to={sendTo}>
				<span className="fa-solid text-blue-600 fa-arrow-left cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			</Link>
			<div className="flex grow ml-8">
				<Avatar imgSize="sm" imgUrl={user.photo || ''} />
				<span className="ml-4">{user.fullname}</span>
			</div>
			<span className="fa-solid fa-circle-info text-blue-600 cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
		</header>
	);
};

export default ChatHeader;
