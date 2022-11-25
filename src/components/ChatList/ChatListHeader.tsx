import React, { useState } from 'react';
import SideBar from './SideBar';
const ChatListHeader = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="flex">
			<button
				onClick={() => setOpen(prev => !prev)}
				className="hamburger-icon"
			></button>
			<h1>Chats</h1>
			<button className="pen"></button>
			<SideBar isShown={open} onClose={() => setOpen(prev => false)} />
		</header>
	);
};

export default ChatListHeader;
