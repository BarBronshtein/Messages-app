import React from 'react';
import MsgForm from './Msg/MsgForm';

const SendBar = () => {
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;
	return (
		<footer className="send-bar flex col-start-2 items-center p-2 text-lg text-blue-600 w-screen justify-between sm:text-2xl">
			{isMobile && (
				<span className="fa-solid fa-camera hover:bg-[#4444] hover:rounded-full p-2"></span>
			)}
			<span className="fa-solid fa-image cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			<span className="fa-solid fa-microphone cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
			<MsgForm />
			<span className="fa-solid fa-thumbs-up cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"></span>
		</footer>
	);
};

export default SendBar;
