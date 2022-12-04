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
		<section className="chat-list p-4">
			<ChatListHeader />
			<SearchForm onChangeInput={onChangeInput} />
			<ProfileList users={[]} />
		</section>
	);
};

export default ChatList;
