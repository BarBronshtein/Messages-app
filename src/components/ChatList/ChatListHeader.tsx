import React, { useState } from 'react';
import SideBar from './SideBar';
const ChatListHeader = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className="flex">
				<span
					onClick={() => setOpen(() => true)}
					className="fa-regular fa-bars"
				></span>
				<h1>Chats</h1>
				<span className="fa-solid fa-pen"></span>
			</header>
			<SideBar isShown={open} onClose={() => setOpen(() => false)} />
		</>
	);
};

export default ChatListHeader;
