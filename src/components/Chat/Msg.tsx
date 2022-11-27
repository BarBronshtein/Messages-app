import React from 'react';
type Props = {
	type?: 'video' | 'img';
	url?: string;
	txt: string;
};

const Msg = (props: Props) => {
	const urlRegex =
		/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
	const words = props.txt.split(' ');

	return (
		<div className="msg max-w-[300]">
			<p>
				{words.map(word =>
					word.match(urlRegex) ? <a href={word}>{word} </a> : word + ' '
				)}
			</p>
		</div>
	);
};

export default Msg;
