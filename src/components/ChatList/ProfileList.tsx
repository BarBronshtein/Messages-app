import React from 'react';
import ProfilePreview from './ProfilePreview';
export type User = {
	fullname: string;
	lastMsg: { txt: string; timestamp: number };
	imgUrl: string;
	_id: string;
};
type Props = {
	users: User[];
};
const ProfileList = (props: Props) => {
	return (
		<div className="grow">
			{props.users.map(user => (
				<ProfilePreview key={user._id} user={user} />
			))}
		</div>
	);
};

export default ProfileList;
