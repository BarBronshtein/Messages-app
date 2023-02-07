import React, { useEffect } from 'react';
import ChatListHeader from './ChatsCmp/ChatListHeader';
import ChatList from './ChatsCmp/ChatList';
import SearchForm from './ChatsCmp/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { clearContacts, getChatOptions } from '@/store/actions/chatActions';
const Chats = () => {
	const dispatch = useAppDispatch();
	const { chats } = useAppSelector(state => state.chatReducer);
	useEffect(() => {
		dispatch(getChatOptions());
		return () => {
			clearContacts();
		};
	}, []);
	return (
		<section className="chat-list p-4 min-h-screen h-screen flex flex-col shadow-[0_0_4px_0_#00000033] dark:bg-[#242526] dark:text-white dark:shadow-[inset_-1px_0_0_0_#ffffff33]">
			<ChatListHeader />
			<SearchForm />
			<ChatList chats={chats || []} />
		</section>
	);
};

export default Chats;
