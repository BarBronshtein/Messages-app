import React, { FormEvent, useRef } from 'react';
import { useFormRegister } from '../../CustomHooks/useFormRegister';

const SearchForm = (props: { onChangeInput: (...args: any[]) => void }) => {
	const { register, resetForm } = useFormRegister(
		{ txt: '' },
		props.onChangeInput
	);
	const ref = useRef<HTMLInputElement | null>(null);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<form
			onSubmit={onSubmit}
			onClick={() => ref.current?.focus()}
			className="hover:cursor-text max-w-[550px] relative"
		>
			<div className="input-group py-4 relative z-[-5] w-full text-gray-400">
				<span className="fa-solid fa-magnifying-glass absolute text-sm  top-[2.2rem] left-4"></span>
				<input
					ref={ref}
					placeholder="Search"
					className="px-12 py-4 bg-slate-800 rounded-full border-none outline-none w-full "
					type="text"
					{...register('txt')}
				/>
			</div>
			{register('txt').value && (
				<span
					onClick={ev => {
						ev.stopPropagation();
						console.log('here');
						resetForm();
					}}
					className="fa-solid fa-times absolute cursor-pointer top-[2.35rem] right-8 text-gray-400"
				></span>
			)}
		</form>
	);
};

export default SearchForm;
