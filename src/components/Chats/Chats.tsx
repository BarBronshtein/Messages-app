import React, { useEffect } from 'react';
import ChatListHeader from './ChatsCmp/ChatListHeader';
import ChatList from './ChatsCmp/ChatList';
import SearchForm from './ChatsCmp/SearchForm';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import {
	clearContacts,
	getChatOptions,
	saveSocketConversation,
} from '@/store/actions/chatActions';
import { ISocketTypes, socketService } from '@/services/socket.service';
import { ChatOption } from '@/types';
const Chats = () => {
	const dispatch = useAppDispatch();
	const { chats } = useAppSelector(state => state.chatReducer);
	useEffect(() => {
		document.querySelector('#g_a11y_announcement')?.remove();
	}, []);
	useEffect(() => {
		socketService.on(
			ISocketTypes.SERVER_EMIT_CONVERSATION_UPDATE,
			(data: ChatOption) => dispatch(saveSocketConversation(data))
		);

		dispatch(getChatOptions());
		return () => {
			clearContacts();
			socketService.off(ISocketTypes.SERVER_EMIT_CONVERSATION_UPDATE);
		};
	}, []);
	return (
		<section className="chat-list p-4 full-vh flex flex-col shadow-[0_0_4px_0_#00000033] dark:bg-[#242526] dark:text-white dark:shadow-[inset_-1px_0_0_0_#ffffff33]">
			<ChatListHeader />
			<SearchForm />
			<ChatList chats={chats || []} />
		</section>
	);
};

export default Chats;
