import React, { useEffect } from 'react';
import ChatListHeader from './ChatsCmp/ChatListHeader';
import ChatList from './ChatsCmp/ChatList';
import SearchForm from './ChatsCmp/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { getChatOptions } from '@/store/actions/chatActions';
const Chats = () => {
	const dispatch = useAppDispatch();
	const { chats } = useAppSelector(state => state.chatReducer);
	useEffect(() => {
		dispatch(getChatOptions());
	}, []);
	return (
		<section className="chat-list p-4 min-h-screen flex flex-col shadow-[0_0_4px_0_#00000033]">
			<ChatListHeader />
			<SearchForm />
			<ChatList chats={chats || []} />
		</section>
	);
};

export default Chats;
