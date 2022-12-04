import React, { FormEvent } from 'react';
import { useFormRegister } from '../../CustomHooks/useFormRegister';

const SearchForm = () => {
	const { register, resetForm } = useFormRegister({ txt: '' }, () => {});
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		resetForm();
	};
	return (
		<form onSubmit={onSubmit}>
			<div className="input-group py-4 relative z-[-5] w-full ">
				<span className="fa-solid fa-magnifying-glass absolute text-sm text-gray-400 top-[2.2rem] left-4"></span>
				<input
					placeholder="Search"
					className="px-12 py-4 bg-slate-700 rounded-full border-none outline-none text-gray-400 w-full max-w-[415px]"
					type="text"
					{...register('txt')}
				/>
			</div>
		</form>
	);
};

export default SearchForm;
