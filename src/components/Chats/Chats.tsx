import React, { useEffect } from 'react';
import { utilService } from '../../services/util.service';
import ChatListHeader from './ChatsCmp/ChatListHeader';
import ChatList from './ChatsCmp/ChatList';
import SearchForm from './ChatsCmp/SearchForm';
const Chats = () => {
	useEffect(() => {
		// dispatch(queryChats()) gives the last 10 chats
	}, []);
	const getUsers = ({ txt }: { txt: string }) => {
		// dispatch(queryUsers())
	};
	const onChangeInput = utilService.debounce(getUsers, 400);
	return (
		<section className="chat-list p-4 min-h-screen flex flex-col shadow-[0_0_4px_0_#00000033]">
			<ChatListHeader />
			<SearchForm onChangeInput={onChangeInput} />
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
