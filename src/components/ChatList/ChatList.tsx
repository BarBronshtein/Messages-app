import React from 'react';
import ChatListHeader from './ChatListHeader';
import ProfileList from './ProfileList';
import SearchForm from './SearchForm';
const ChatList = () => {
	return (
		<section className="chat-list">
			<ChatListHeader />
			<SearchForm />
			<ProfileList users={[]} />
		</section>
	);
};

export default ChatList;
