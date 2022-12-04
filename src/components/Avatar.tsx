import React from 'react';

const sizes = { sm: '28px', md: '40px', lg: '56px', xl: '80px', '': '14px' };
type Props = {
	imgSize: keyof typeof sizes;
	imgUrl: string;
	className?: string;
};
const Avatar = ({ imgSize, imgUrl, className }: Props) => {
	if (!imgUrl) {
		imgUrl =
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
	}

	let size = sizes[imgSize];

	return (
		<div
			style={{
				background: `url(${imgUrl}) no-repeat center/cover`,
				width: size,
				height: size,
			}}
			className={`rounded-full ${className}`}
		></div>
		// 	<img className={`rounded-full w-[${size}] h-[${size}]`} src={imgUrl} alt="" />
	);
};

export default Avatar;
