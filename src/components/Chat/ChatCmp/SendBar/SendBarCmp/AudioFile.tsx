import React, { useEffect, useState } from 'react';
type Props = {
	audio: Blob | File;
};
const AudioFile = ({ audio }: Props) => {
	const [src, useSrc] = useState<string>('');
	useEffect(() => {
		if (!audio) return;
		useSrc(() => URL.createObjectURL(audio));
	}, [audio]);
	if (audio?.size > 5272880)
		return (
			<span className="absolute max-w-[350px] bottom-14">File is too large</span>
		);
	return audio ? (
		<audio
			className="absolute max-w-[350px] bottom-14 object-contain h-[150px] left-[50%] translate-x-[-50%]"
			controls
			src={src}
		></audio>
	) : (
		<audio></audio>
	);
};

export default AudioFile;
