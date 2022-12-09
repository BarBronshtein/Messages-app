import React from 'react';
export type Message = {
	id: string;
	fromUser: string;
	type?: 'video' | 'img' | 'audio';
	url?: string;
	txt: string;
};

const MsgPreview = ({ txt, url, type, fromUser }: Message) => {
	const loggedinUser = 'currentUser'; // Replace with session user once loggedinUser is implemented
	const urlRegex =
		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	const words = txt.split(' ');
	const types = {
		video: <video src={url}></video>,
		img: <img src={url} />,
		audio: <audio controls src={url}></audio>,
	};

	const markup = type ? types[type] : '';

	return (
		<div
			className="msg grid"
			style={{
				gridTemplateColumns: fromUser !== loggedinUser ? '300px 1fr' : '1fr 300px',
			}}
		>
			<div
				className={`rounded-full w-fit col-start-${
					fromUser !== 'currentUser'
						? '1 bg-gray-300'
						: '2 text-right bg-blue-500 text-white justify-self-end'
				}`}
			>
				{!!type && <div> {markup}</div>}
				<p className="p-3">
					{words.map(word =>
						word.match(urlRegex) ? <a href={word}>{word + ' '}</a> : word + ' '
					)}
				</p>
			</div>
		</div>
	);
};

export default MsgPreview;
