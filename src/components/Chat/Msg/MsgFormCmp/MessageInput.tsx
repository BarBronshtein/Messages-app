import { utilService } from '@/services/util.service';
import React from 'react';

type Props = {
	register: (field: 'msg') => {
		onChange: (
			ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) => void;
		name: 'msg';
		id: 'msg';
		value: string;
	};
};
const MessageInput = ({ register }: Props) => {
	return (
		<div className="input-group relative grow">
			<textarea
				cols={20}
				rows={1}
				placeholder="Message"
				className="w-full text-black rounded-3xl border-none outline-none pl-4 pr-[2.25rem] py-1 max-h-[225px] text-lg sm:2xl  bg-gray-300 resize-none overflow-hidden dark:bg-[#3A3B3C] dark:text-[#E4E6EB]"
				{...register('msg')}
				onInput={ev => utilService.auto_height(ev.target as HTMLTextAreaElement)}
			></textarea>

			<span className="fa-solid h-fit fa-face-smile absolute right-4 top-[0.65rem] sm:top-[0.65rem] hover:cursor-not-allowed"></span>
		</div>
	);
};

export default MessageInput;
