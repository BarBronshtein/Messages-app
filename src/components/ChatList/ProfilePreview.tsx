import { utilService } from '@/services/util.service';
import React from 'react';
import Avatar from '../Avatar';
type Props = {
	user: {
		fullname: string;
		imgUrl: string;
		lastMsg: { txt: string; timestamp: number };
	};
};
const ProfilePreview = (props: Props) => {
	const timeFromLastMsg = utilService.timeAgo(props.user.lastMsg.timestamp);
	const lastMsgPreview =
		props.user.lastMsg.txt.length > 28
			? `${props.user.lastMsg.txt.slice(0, 29)}...`
			: props.user.lastMsg.txt;

	return (
		<div className="profile-preview rounded m-1 flex items-center">
			<Avatar imgSize="lg" imgUrl={props.user.imgUrl} />
			<div className="flex flex-col pl-3">
				<h4>{props.user.fullname}</h4>
				<p className="text-[#65676B]">
					{lastMsgPreview} <span>·{timeFromLastMsg}</span>
				</p>
			</div>
		</div>
	);
};

export default ProfilePreview;
