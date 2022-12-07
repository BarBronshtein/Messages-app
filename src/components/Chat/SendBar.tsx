import React, { useState } from 'react';
import MsgForm from './Msg/MsgForm';

const SendBar = () => {
	const [isTexting, setIsTexting] = useState(false);
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;
	const footerClass = `send-bar flex col-start-2 items-center p-2 text-lg text-blue-600 w-screen sm:text-xl ${
		isTexting ? 'justify-evenly' : 'justify-between'
	}`;
	return (
		<footer className={footerClass}>
			{!isTexting && (
				<span className="fa-solid fa-microphone cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			{isMobile && (
				<span className="fa-solid fa-camera hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			{!isTexting && (
				<span className="fa-solid fa-image cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			<MsgForm isTexting={isTexting} setIsTexting={setIsTexting} />
			{isTexting && (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 24 24"
					aria-hidden="true"
					className="h-[18px] sm:h-5"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
				</svg>
			)}
			{!isTexting && (
				<span className="fa-solid fa-thumbs-up cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
		</footer>
	);
};

export default SendBar;
