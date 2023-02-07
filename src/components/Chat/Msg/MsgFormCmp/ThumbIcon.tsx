import { chatService } from '@/services/chat.service';
import React from 'react';

type Props = {
	addMessage: Function;
};

const ThumbIcon = ({ addMessage }: Props) => {
	return (
		<span
			className="fa-solid fa-thumbs-up h-fit cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"
			onClick={() => {
				const message = chatService.getEmpyMessage('👍');
				addMessage(message);
			}}
		></span>
	);
};

export default ThumbIcon;
