import React from 'react';
import { useFormRegister } from '../../../CustomHooks/useFormRegister';

const MsgForm = () => {
	const { register, resetForm } = useFormRegister({ msg: '' }, () => {});
	function auto_height(elem: HTMLTextAreaElement) {
		elem.style.height = '1px';
		elem.style.height = elem.scrollHeight + 'px';
		return;
	}
	return (
		<form
			onSubmit={ev => {
				ev.preventDefault();
				resetForm();
			}}
		>
			<div className="input-group relative px-4">
				<textarea
					cols={20}
					rows={1}
					placeholder="Message"
					className="rounded-full border-none outline-none pr-10 pl-6 py-2 text-white text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden"
					{...register('msg')}
					onInput={ev => auto_height(ev.target as HTMLTextAreaElement)}
				></textarea>
				{!register('msg').value && (
					<span className="fa-solid fa-face-smile absolute right-6 top-3"></span>
				)}
			</div>
		</form>
	);
};

export default MsgForm;
