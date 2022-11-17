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
			<input type="text" {...register('txt')} />
		</form>
	);
};

export default SearchForm;
