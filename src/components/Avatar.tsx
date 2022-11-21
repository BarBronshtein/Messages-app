import React from 'react';
import PropTypes from 'prop-types';

const sizes = { sm: '28px', md: '40px', lg: '56px', xl: '80px', '': '14px' };
type Props = {
	imgSize: keyof typeof sizes;
	imgUrl: string;
};
const Avatar = ({ imgSize, imgUrl = '' }: Props) => {
	if (!imgUrl) {
		imgUrl =
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
	}

	let size = sizes[imgSize];

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
