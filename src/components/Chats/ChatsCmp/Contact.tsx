import Avatar from '@/components/Avatar';
import { User } from '@/components/Chat/ChatCmp/ChatHeader';
import React from 'react';
type Props = {
	user: User;
};

const Contact = (props: Props) => {
	return (
		<div className=" rounded flex items-center cursor-pointer p-2 hover:bg-slate-200">
			<Avatar imgSize="lg" imgUrl={props.user.photo || ''} />
			<h4>{props.user.fullname}</h4>
		</div>
	);
};

export default Contact;
