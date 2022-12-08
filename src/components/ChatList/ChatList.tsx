import React from 'react';
import { utilService } from '../../services/util.service';
import ChatListHeader from './ChatListHeader';
import ProfileList from './ProfileList';
import SearchForm from './SearchForm';
const ChatList = () => {
	const getUsers = ({ txt }: { txt: string }) => {
		// dispatch(queryUsers())
	};
	const onChangeInput = utilService.debounce(getUsers, 400);
	return (
		<section className="chat-list p-4 min-h-screen flex flex-col shadow-[0_0_4px_0_#00000033]">
			<ChatListHeader />
			<SearchForm onChangeInput={onChangeInput} />
			<ProfileList
				users={[
					{
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

export default ChatList;
