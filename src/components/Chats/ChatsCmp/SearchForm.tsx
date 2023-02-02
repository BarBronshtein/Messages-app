import React, { FormEvent, useRef, useState } from 'react';
import { useFormRegister } from '@/CustomHooks/useFormRegister';
import { utilService } from '@/services/util.service';

import Contact from './Contact';
import { User } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { clearContacts, getContacts } from '@/store/actions/chatActions';

const SearchForm = () => {
	const dispatch = useAppDispatch();
	const userOptions = useAppSelector(state => state.chatReducer.contacts);

	const [controller, setController] = useState<AbortController>(null!);

	const clear = (): any => dispatch(clearContacts());

	const getUsers = ({ txt }: { txt: string }) => {
		if (!txt) clear();
		if (controller) controller.abort();
		const newController = new AbortController();
		setController(newController);
		dispatch(getContacts(txt, newController.signal));
	};

	const onChangeInput = utilService.debounce(getUsers, 400);

	const { register, resetForm } = useFormRegister({ txt: '' }, onChangeInput);

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
						clearContacts();
						resetForm();
					}}
					className="fa-solid fa-times absolute cursor-pointer top-[2.35rem] right-8 text-gray-400"
				></span>
			)}

			{userOptions &&
				userOptions.map((user: User) => (
					<Contact key={user._id} user={user} clearContacts={clear} />
				))}
		</form>
	);
};

export default SearchForm;
