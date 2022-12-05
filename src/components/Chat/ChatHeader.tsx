import React from 'react';
import Avatar from '../Avatar';

const ChatHeader = () => {
	return (
		<header className="chat-header items-center text-blue-600 flex justify-around p-2">
			<span className="fa-solid fa-arrow-left cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			<div className="flex grow ml-8">
				<Avatar imgSize="sm" imgUrl="" />
				<span className="ml-4">user fullname</span>
			</div>
			<span className="fa-solid fa-circle-info cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
		</header>
	);
};

export default ChatHeader;
