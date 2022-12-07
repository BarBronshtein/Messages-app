import { utilService } from '@/services/util.service';
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import { User } from './ProfileList';
type Props = {
	user: User;
};
const ProfilePreview = (props: Props) => {
	const timeFromLastMsg = utilService.timeAgo(props.user.lastMsg.timestamp);
	const lastMsgPreview =
		props.user.lastMsg.txt.length > 28
			? `${props.user.lastMsg.txt.slice(0, 29)}...`
			: props.user.lastMsg.txt;

	return (
		<Link to={`/chats/${props.user._id}`}>
			<div className="profile-preview rounded m-1 flex items-center cursor-pointer">
				<Avatar imgSize="lg" imgUrl={props.user.imgUrl} />
				<div className="flex flex-col pl-3">
					<h4>{props.user.fullname}</h4>
					<p className="text-[#65676B]">
						{lastMsgPreview} <span>·{timeFromLastMsg}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default ProfilePreview;
