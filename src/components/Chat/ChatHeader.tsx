import React from 'react';
import Avatar from '../Avatar';

const ChatHeader = () => {
	return (
		<header className="chat-header flex justify-between p-2">
			<span className="fa-solid fa-arrow-left"></span>
			<Avatar imgSize="sm" imgUrl="" />
			<span>user fullname</span>
			<span className="fa-solid fa-circle-info"></span>
		</header>
	);
};

export default ChatHeader;
