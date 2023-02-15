import { userService } from '@/services/user.service';
import { Message } from '@/types';
import React from 'react';

const MsgPreview = ({ txt, url, type, fromUser, id }: Message) => {
	const loggedinUser = userService.getLoggedInUser(); // Replace with session user once loggedinUser is implemented
	const urlRegex = new RegExp(
		'^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
	);
	const words = txt?.split(' ');
	const types = {
		video: <video className="rounded-lg" controls src={url}></video>,
		img: <img loading="lazy" className="rounded-lg" src={url} />,
		audio: (
			<audio controls>
				<source src={url} type="audio/mpeg" />
				<source src={url} type="audio/aac" />
				<source src={url} type="audio/ogg" />
				<source src={url} type="audio/wav" />
				Your browser does not support the audio tag
			</audio>
		),
	};

	const markup = type ? types[type] : '';

	return (
		<div
			className="msg grid py-2"
			style={{
				gridTemplateColumns:
					fromUser !== loggedinUser._id ? '300px 1fr' : '1fr 300px',
			}}
		>
			<div
				className={`w-fit ${
					fromUser !== loggedinUser._id
						? 'col-start-1 dark:text-white'
						: 'col-start-2 text-righ text-white justify-self-end'
				}`}
			>
				{!!type && <div>{markup}</div>}
				{txt && (
					<p
						className={`p-3 rounded-full ${
							fromUser !== loggedinUser._id
								? 'bg-[#E4E6EB] dark:bg-[#3E4042]'
								: 'bg-[rgb(0,132,255)]'
						}`}
					>
						{words.map((word, i) =>
							word.match(urlRegex) ? (
								<a
									key={word + i + id}
									target="_blank"
									className="underline"
									href={word}
								>
									{word + ' '}
								</a>
							) : (
								<span key={word + i + id}>{word + ' '}</span>
							)
						)}
					</p>
				)}
			</div>
		</div>
	);
};

export default MsgPreview;
