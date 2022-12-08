import React, { useCallback, useRef, useState } from 'react';
import SideBar from './SideBar';
const ChatListHeader = () => {
	const el = useRef<Element>(document.getElementById('modal-root') as Element);
	const closeSideBar = useCallback(() => {
		setOpen(() => true);
		el.current.classList.remove('z-[-1]', 'cursor-default');
		el.current.classList.add('cursor-pointer', 'opacity-05');
	}, []);
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className="flex items-center py-4 px-2 justify-between max-w-[550px]">
				<span
					onClick={() => closeSideBar()}
					className="fa-solid fa-bars bg-slate-300  rounded-full p-2 cursor-pointer"
				></span>
				<h1 className="absolute left-16">Chats</h1>
				<span className="fa-solid fa-pen bg-slate-300 rounded-full p-2 cursor-pointer"></span>
			</header>
			<SideBar isShown={open} onClose={() => setOpen(() => false)}></SideBar>
		</>
	);
};

export default ChatListHeader;
