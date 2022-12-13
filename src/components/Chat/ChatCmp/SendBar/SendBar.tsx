import React from 'react';
import MsgForm from '../../Msg/MsgForm';

const SendBar = () => {
	return (
		<footer className="send-bar p-2 text-lg text-blue-600 sm:text-xl">
			<MsgForm />
		</footer>
	);
};

export default SendBar;
