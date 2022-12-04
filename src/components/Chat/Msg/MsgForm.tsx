import React from 'react';
import { useFormRegister } from '../../../CustomHooks/useFormRegister';

const MsgForm = () => {
	const { register, resetForm } = useFormRegister({ msg: '' }, () => {});
	return (
		<form
			onSubmit={ev => {
				ev.preventDefault();
				resetForm();
			}}
		>
			<div className="input-group">
				<input type="text" placeholder="Message" {...register('msg')} />
				<i className="fa-solid fa-face-smile"></i>
			</div>
		</form>
	);
};

export default MsgForm;
