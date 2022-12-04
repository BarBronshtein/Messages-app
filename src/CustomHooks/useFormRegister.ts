import React, { useState } from 'react';
import { useEffectUpdate } from './useEffectUpdate';

export const useFormRegister = <T>(initialState: T, cb: Function) => {
	const [fields, setFields] = useState(initialState);

	useEffectUpdate(() => {
		cb?.(fields);
	}, [fields]);

	const handleChange = (
		ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const target = ev.target;
		const field = target.name;
		const value = target.type === 'number' ? +target.value || '' : target.value;
		setFields(prefFields => ({ ...prefFields, [field]: value }));
	};

	const register = (field: keyof T) => {
		return {
			onChange: handleChange,
			name: field,
			id: field,
			value: fields[field],
		};
	};

	const resetForm = () => {
		setFields(() => initialState);
	};
	// return [register,resetForm]
	return { register, resetForm };
};
