import React from 'react';
import MsgForm from './Msg/MsgForm';

const SendBar = () => {
	const isMobile =
		window.navigator.userAgent.indexOf('Mobile') !== -1 ? true : false;
	return (
		<footer className="SendBar flex">
			{isMobile && <span className="fa-regular fa-camera"></span>}
			<span className="fa-regular fa-image"></span>
			<span className="fa-regular fa-microphone"></span>
			<MsgForm />
			<span className="fa-regular fa-thumb-up"></span>
		</footer>
	);
};

export default SendBar;
