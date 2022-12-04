import React, { FormEvent, useRef } from 'react';
import { useFormRegister } from '../../CustomHooks/useFormRegister';

const SearchForm = () => {
	const { register, resetForm } = useFormRegister({ txt: '' }, () => {});
	const ref = useRef<HTMLInputElement | null>(null);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		// get users from service ...
		resetForm();
	};
	return (
		<form
			onSubmit={onSubmit}
			onClick={() => ref.current?.focus()}
			className="hover:cursor-text max-w-[415px]"
		>
			<div className="input-group py-4 relative z-[-5] w-full ">
				<span className="fa-solid fa-magnifying-glass absolute text-sm text-gray-400 top-[2.2rem] left-4"></span>
				<input
					ref={ref}
					placeholder="Search"
					className="px-12 py-4 bg-slate-700 rounded-full border-none outline-none text-gray-400 w-full "
					type="text"
					{...register('txt')}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
