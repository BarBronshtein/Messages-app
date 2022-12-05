import React from 'react';
export type Message = {
	id: string;
	fromUser: string;
	type?: 'video' | 'img';
	url?: string;
	txt: string;
};

const MsgPreview = ({ txt, url, type, fromUser }: Message) => {
	const urlRegex =
		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	const words = txt.split(' ');
	const markup =
		type === 'video' ? <video src={url}></video> : <img src={url} />;

	return (
		<div
			className={`msg grid grid-cols-[${
				fromUser !== 'currentUser' ? '300px_1fr' : '1fr_300px'
			}]`}
		>
			<div className={`col-start-${fromUser !== 'currentUser' ? '1' : '2'}`}>
				{!!type && <div> {markup}</div>}
				<p>
					{words.map(word =>
						word.match(urlRegex) ? <a href={word}>{word + ' '}</a> : word + ' '
					)}
				</p>
			</div>
		</div>
	);
};

export default MsgPreview;
