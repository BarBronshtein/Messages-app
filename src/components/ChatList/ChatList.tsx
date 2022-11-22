import React from 'react';
import ChatListHeader from './ChatListHeader';
import ProfileList from './ProfileList';
import SearchForm from './SearchForm';
import SideBar from './SideBar';
const ChatList = () => {
	return (
		<section className="chat-list">
			<ChatListHeader />
			<SearchForm />
			<ProfileList users={[]} />
			<SideBar />
		</section>
	);
};

export default ChatList;
