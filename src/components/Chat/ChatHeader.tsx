import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';

const ChatHeader = () => {
	const isMobile = window.navigator.userAgent.indexOf('Mobile') !== -1;
	const sendTo = isMobile ? '/chats' : '/chats/'; // Change to default chat when completing building deafult chat component
	return (
		<header className="chat-header shadow-[inset_0_0_4px] shadow-[#00000033] items-center text-blue-600 flex justify-around p-2 text-lg sm:text-xl">
			<Link to={sendTo}>
				<span className="fa-solid fa-arrow-left cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			</Link>
			<div className="flex grow ml-8">
				<Avatar imgSize="sm" imgUrl="" />
				<span className="ml-4">user fullname</span>
			</div>
			<span className="fa-solid fa-circle-info cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
		</header>
	);
};

export default ChatHeader;
