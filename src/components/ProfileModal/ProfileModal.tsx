import React, { useEffect, useRef } from 'react';
import { ProfileModal as mount } from 'auth/Modal';
const ProfileModal = () => {
	const ref = useRef(null);
	useEffect(() => {
		mount(ref.current);
	}, []);
	return <div ref={ref}></div>;
};

export default ProfileModal;
