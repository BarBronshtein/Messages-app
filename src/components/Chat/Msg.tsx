import React from 'react';
export type Msg = {
	type?: 'video' | 'img';
	url?: string;
	txt: string;
};

const MsgPreview = ({ txt, url, type }: Msg) => {
	const urlRegex =
		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	const words = txt.split(' ');
	const markup =
		type === 'video' ? <video src={url}></video> : <img src={url} />;

	return (
		<div className="msg max-w-[300]">
			<div>{type && markup}</div>
			<p>
				{words.map(word =>
					word.match(urlRegex) ? <a href={word}>{word} </a> : word + ' '
				)}
			</p>
		</div>
	);
};

export default MsgPreview;
