import React from 'react';
import MsgForm from './Msg/MsgForm';

const SendBar = () => {
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;
	return (
		<footer className="SendBar flex items-center fixed bottom-4 text-2lg text-blue-600 w-screen justify-around sm:text-2xl">
			{isMobile && <span className="fa-solid fa-camera"></span>}
			<span className="fa-solid fa-image"></span>
			<span className="fa-solid fa-microphone"></span>
			<MsgForm />
			<span className="fa-solid fa-thumbs-up"></span>
		</footer>
	);
};

export default SendBar;
