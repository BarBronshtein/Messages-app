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
				<span className="fa-solid fa-paper-plane cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			{!isTexting && (
				<span className="fa-solid fa-thumbs-up cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
		</footer>
	);
};

export default SendBar;
