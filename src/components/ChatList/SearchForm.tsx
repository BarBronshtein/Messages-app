import React, { FormEvent } from 'react';
import { useFormRegister } from '../../CustomHooks/useFormRegister';

const SearchForm = () => {
	const { register, resetForm } = useFormRegister({ txt: '' }, () => {});
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		resetForm();
	};
	document.querySelectorAll;
	return (
		<form onSubmit={onSubmit}>
			<div className="input-group relative  w-full ">
				<span className="fa-solid fa-magnifying-glass absolute text-sm text-gray-400 top-[0.8rem] left-4"></span>
				<input
					placeholder="Search"
					className="px-12 py-2 bg-slate-700 rounded-[100px] border-none outline-none text-gray-400"
					type="text"
					{...register('txt')}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
