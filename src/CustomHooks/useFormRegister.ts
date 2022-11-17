import { useState } from 'react';
import { useEffectUpdate } from './useEffectUpdate';

export const useFormRegister = <T>(initialState: T, cb?: Function) => {
	const [fields, setFields] = useState(initialState);

	useEffectUpdate(() => {
		cb?.(fields);
	}, [fields]);

	const handleChange = (ev: Event) => {
		const target = ev.target as HTMLInputElement;
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

	const resetFields = () => {
		setFields(() => initialState);
	};

	return [register, resetFields];
};
