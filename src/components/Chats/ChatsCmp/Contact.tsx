import Avatar from '@/components/Avatar';
import { addChat } from '@/store/actions/chatActions';
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
	};
	return (
		<div
			className="w-full py-6 z-5 rounded flex items-center cursor-pointer p-2 hover:bg-slate-200 bg-white"
			onClick={() => onClick(props.user)}
		>
			<Avatar imgSize="lg" imgUrl={props.user.photo || ''} />
			<h4 className="pl-2"> {props.user.fullname}</h4>
		</div>
	);
};

export default Contact;
