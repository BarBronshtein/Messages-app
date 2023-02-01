import React, { useEffect } from 'react';
import ChatListHeader from './ChatsCmp/ChatListHeader';
import ChatList from './ChatsCmp/ChatList';
import SearchForm from './ChatsCmp/SearchForm';
import { useAppDispatch } from '@/store/TypeHooks';
import { getChatOptions } from '@/store/actions/chatActions';
const Chats = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getChatOptions());
	}, []);
	return (
		<section className="chat-list p-4 min-h-screen flex flex-col shadow-[0_0_4px_0_#00000033]">
			<ChatListHeader />
			<SearchForm />
			<ChatList
				chats={[
					{
						chatId: 'i101',
						_id: 'i101',
						fullname: 'Barry Bravov',
						imgUrl: '',
						lastMsg: { txt: 'hi', timestamp: 1670324193063 },
					},
				]}
			/>
		</section>
	);
};

export default Chats;
