import React from 'react';
import MsgForm from './MsgForm';

const SendBar = () => {
	return (
		<footer className="SendBar flex">
			<span className="fa-regular fa-image"></span>
			<span className="fa-regular fa-microphone"></span>
			<MsgForm />
		</footer>
	);
};

export default SendBar;
