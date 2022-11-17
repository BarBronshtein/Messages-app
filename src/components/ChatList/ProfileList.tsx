import React from 'react';
import ProfilePreview from './ProfilePreview';
type User = { fullname: string; lastMsg: string; imgUrl: string };
type Props = {
	users: User[];
};
const ProfileList = (props: Props) => {
	return (
		<div>
			{props.users.map(user => (
				<ProfilePreview user={user} />
			))}
		</div>
	);
};

export default ProfileList;
