import Avatar from '@/components/Avatar';
import { addChat, setContact } from '@/store/actions/chatActions';
import { useAppDispatch } from '@/store/TypeHooks';
import { User } from '@/types';

import React from 'react';
import { useNavigate } from 'react-router-dom';
type Props = {
	user: User;
	clearContacts: Function;
};

const Contact = (props: Props) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onClick = (user: User) => {
		props.clearContacts();
		dispatch(addChat(user)).then((chatId: string) =>
			navigate(`/chats/${chatId}`)
		);
		dispatch(setContact(props.user));
	};
	return (
		<div
			className="absolute w-full z-5 rounded flex items-center cursor-pointer p-2 hover:bg-slate-200 bg-white"
			onClick={() => onClick(props.user)}
		>
			<Avatar imgSize="lg" imgUrl={props.user.photo || ''} />
			<h4 className="pl-2"> {props.user.fullname}</h4>
		</div>
	);
};

export default Contact;
