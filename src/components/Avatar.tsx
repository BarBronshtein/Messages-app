import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	imgSize: string;
	imgUrl: string;
};
const Avatar = ({ imgSize, imgUrl = '' }: Props) => {
	if (!imgUrl) {
		imgUrl =
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
	}

	let size: string;
	switch (imgSize) {
		case 'sm':
			size = '28px';
			break;
		case 'md':
			size = '36px';
			break;
		case 'lg':
			size = '48px';
			break;
		default:
			size = '14px';
	}
	return (
		<div
			style={{ backgroundImage: `url(${imgUrl})` }}
			className={`rounded-full w-[${size}] h-[${size}]]`}
		></div>
		// 	<img className={`rounded-full w-[${size}] h-[${size}]`} src={imgUrl} alt="" />
	);
};

Avatar.propTypes = {
	size: PropTypes.number,
};

export default Avatar;
