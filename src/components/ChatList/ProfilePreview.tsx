import React from 'react';
import Avatar from '../Avatar';
type Props = {
	user: {
		fullname: string;
		imgUrl: string;
		lastMsg: string;
	};
};
const ProfilePreview = (props: Props) => {
	const timeFromLastMsg = '';
	const lastMsg =
		props.user.lastMsg.length > 28
			? `${props.user.lastMsg.slice(0, 29)}...`
			: props.user.lastMsg.length;

	return (
		<div className="profile-preview rounded m-1 flex">
			<Avatar imgSize="lg" imgUrl={props.user.imgUrl} />
			<div className="flex flex-col">
				<h4>{props.user.fullname}</h4>
				<p className="text-veryLightGray">
					{lastMsg} <span>· {timeFromLastMsg}</span>
				</p>
			</div>
		</div>
	);
};

export default ProfilePreview;
