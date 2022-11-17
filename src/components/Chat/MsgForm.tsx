import React from 'react';

const MsgForm = () => {
	return (
		<form
			onSubmit={ev => {
				ev.preventDefault();
			}}
		></form>
	);
};

export default MsgForm;
