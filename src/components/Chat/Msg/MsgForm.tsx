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
			className="w-[80%]"
			onSubmit={ev => {
				ev.preventDefault();
				resetForm();
			}}
		>
			<div className="input-group relative ">
				<textarea
					cols={20}
					rows={1}
					placeholder="Message"
					className="w-full text-black rounded-3xl border-none outline-none px-4 py-1  text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden"
					{...register('msg')}
					onInput={ev => auto_height(ev.target as HTMLTextAreaElement)}
				></textarea>
				{!register('msg').value && (
					<span className="fa-solid fa-face-smile absolute right-4 top-[0.7rem] sm:top-[0.45rem]"></span>
				)}
			</div>
		</form>
	);
};

export default MsgForm;
