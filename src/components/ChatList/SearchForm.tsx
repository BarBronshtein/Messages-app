import React, { FormEvent } from 'react';

const SearchForm = () => {
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={onSubmit}>
			<input type="text" />
		</form>
	);
};

export default SearchForm;
